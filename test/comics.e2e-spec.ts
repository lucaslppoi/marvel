import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { CreateComicsDto } from 'src/comics/dto/create-comics-dto';

describe('ComicsService (E2E)', () => {
  let app: INestApplication;
  let createdComicId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a comic', async () => {
    const createDto: CreateComicsDto = {
      id: 123456,
      title: 'Teste e2e',
      description: 'registro teste',
      thumbnail: '',
    };
    const response = await request(app.getHttpServer())
      .post('/comics')
      .send(createDto)
      .expect(201);
    expect(response.body).toHaveProperty('_id');
    createdComicId = response.body._id;
  });

  it('should find all comics', async () => {
    const response = await request(app.getHttpServer())
      .get('/comics')
      .expect(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should find comic by ID', async () => {
    const response = await request(app.getHttpServer())
      .get(`/comics/${createdComicId}`)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdComicId);
  });

  it('should update comic', async () => {
    const updateDto = {
      title: 'Updated Title',
      description: 'Updated Description',
      thumbnail: 'Updated Thumbnail',
    };
    const response = await request(app.getHttpServer())
      .patch(`/comics/${createdComicId}`)
      .send(updateDto)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdComicId);
    expect(response.body);
  });

  it('should remove comic', async () => {
    const response = await request(app.getHttpServer())
      .delete(`/comics/${createdComicId}`)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdComicId);
  });
});
