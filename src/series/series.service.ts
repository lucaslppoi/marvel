import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { HttpService } from '@nestjs/axios';
import { writeFile } from 'fs/promises';
import { title } from 'process';
// const fs = require('fs').promises;
// import * as fs from 'fs';
import { promises as fs } from 'fs';
import fetch from 'node-fetch';


@Injectable()
export class SeriesService {
  constructor(private readonly httpService: HttpService) { }
  private apiKey = 'ts=1&apikey=d48b7eba9663ff346171fa4dd833116f&hash=b51089b18383b373ba39e34a64f7787a';

  async create(name: string) {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/series?title=${name}&limit=1&${this.apiKey}`)
    const data = await response.json()

    const dataURLMapped = await Promise.all(data.data.results.map(async result => {
      const characterURL = result.characters.items.map(character => {
        return {
          url: character.resourceURI,
          id: this.extractLastNumberFromURL(character.resourceURI)
        }
      })
      const comicsMapped = result.comics.items.map(comic => {
        return {
          url: comic.resourceURI,
          id: this.extractLastNumberFromURL(comic.resourceURI)
        }
      })
      const creatorsMapped = result.creators.items.map(creator => {
        return {
          url: creator.resourceURI,
          id: this.extractLastNumberFromURL(creator.resourceURI),
          role: creator.role
        }
      })

      return {
        id: result.id,
        title: result.title,
        description: result.description,
        creators: creatorsMapped,
        comics: comicsMapped,
        characters: characterURL,
      }
    }))


    await fs.writeFile('src/series/data/serie.json', JSON.stringify(dataURLMapped[0], null, 4), 'utf-8');

    await this.mapComics()
    await this.mapCharacters()
    await this.mapCreators()

  }

  async mapComics() {
    const data = await fs.readFile('src/series/data/serie.json', 'utf-8')
    const file = JSON.parse(data)

    const comicsData = await Promise.all(file.comics.map(async comic => {
      const comicsResponse = await fetch(`${comic.url}?${this.apiKey}`)
      const comicsData = await comicsResponse.json()
      return await comicsData.data.results.map(info => {
        return {
          title: info.title,
          description: info.description,
          thumbnail: info.thumbnail.path,
        }
      })

    }))
    await fs.writeFile('src/series/data/comics.json', JSON.stringify(comicsData, null, 4), 'utf-8');
  }

  async mapCharacters() {
    const data = await fs.readFile('src/series/data/serie.json', 'utf-8')
    const file = JSON.parse(data)

    const charactersData = await Promise.all(file.characters.map(async character => {
      const charactersResponse = await fetch(`${character.url}?${this.apiKey}`)
      const charactersData = await charactersResponse.json()
      return await charactersData.data.results.map(info => {
        return {
          name: info.name,
          description: info.description,
          thumbnail: info.thumbnail.path,
        }
      })

    }))
    await fs.writeFile('src/series/data/characters.json', JSON.stringify(charactersData, null, 4), 'utf-8');
  }

  async mapCreators() {
    const data = await fs.readFile('src/series/data/serie.json', 'utf-8')
    const file = JSON.parse(data)

    const creatorsData = await Promise.all(file.creators.map(async creator => {
      const creatorsResponse = await fetch(`${creator.url}?${this.apiKey}`)
      const creatorsData = await creatorsResponse.json()

      const creatorsComicsResponse = await fetch(`${creator.url}/comics?series=${file.id}&${this.apiKey}`)
      const creatorsComicsData = await creatorsComicsResponse.json()

      const comicsRelated = creatorsComicsData.data.results.map(comic => {
        return {
          id: comic.id,
          title: comic.title
        }
      })
      return creatorsData.data.results.map(info => {
        return {
          name: info.fullName,
          role: creator.role,
          comics: comicsRelated
        }
      })

    }))
    await fs.writeFile('src/series/data/creators.json', JSON.stringify(creatorsData, null, 4), 'utf-8');
  }


  extractLastNumberFromURL(url: string): number {
    const matches = url.match(/\d+/g);
    return parseInt(matches[matches.length - 1]);
  }
}
