import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { HttpService } from '@nestjs/axios';
import { writeFile } from 'fs/promises';
import { title } from 'process';
const fs = require('fs').promises;
const apiKey = 'ts=1&apikey=d48b7eba9663ff346171fa4dd833116f&hash=b51089b18383b373ba39e34a64f7787a'

@Injectable()
export class SeriesService {
  constructor(private readonly httpService: HttpService) { }

  async create(name: string) {
    const data = await fetch(`https://gateway.marvel.com:443/v1/public/series?title=${name}&limit=1&${apiKey}`)
      .then(jsonValue => jsonValue.json())
      .then(data => {
        return Promise.all(data.data.results.map(results => {
          return {
            id: results.id,
            title: results.title,
            creators: Promise.all(results.creators.items.map(creators => {
              return {
                comics: fetch(`${creators.resourceURI}?${apiKey}`)
                  .then(jsonValue => jsonValue.json())
                  .then(data => {
                    return Promise.all(data.data.results.map(results => {
                      return Promise.all(results.comics.items.map(item => {
                        console.log(item.resourceURI)
                        return {
                          resourceURI: item.resourceURI,
                          name: item.name
                        }
                      }))
                    }))
                  }),
                name: creators.name,
                role: creators.role
              }
            }))
          };
        }));
      });

    await fs.writeFile('src/series/data/serie-data.json', data, (err) => {
      if (err) {
        console.log('erro')
      }
    });
    return data
  }
  async createa(name: string): Promise<string> {
    const url = `https://gateway.marvel.com:443/v1/public/series?title=${name}&limit=1&${apiKey}`;

    try {
      const response = await this.httpService.axiosRef.get(url);
      const results = response.data.data.results.map(result => ({
        id: result.id,
        title: result.title,
        creators: result.creators.items.map(async creator => ({
          name: creator.name,
          role: creator.role,
          comics: await this.fetchComics(creator.resourceURI)
        }))
      }));

      const creatorsData = await Promise.all(results.map(async result => ({
        ...result,
        creators: await Promise.all(result.creators)
      })));

      const data = JSON.stringify(creatorsData, null, 4);
      await writeFile('src/series/data/serie-data.json', data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch series data');
    }
  }

  private async fetchComics(url: string): Promise<any[]> {
    const response = await this.httpService.axiosRef.get(`${url}?${apiKey}`);
    console.log(url)
    return response.data.data.results.map(comic => ({
      resourceURI: comic.resourceURI,
      name: comic.name
    }));
  }
}

