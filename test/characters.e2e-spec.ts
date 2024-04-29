import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { CreateCharactersDto } from 'src/characters/dto/create-characters-dto';

describe('CharactersService (E2E)', () => {
  let app: INestApplication;
  let createdCharacterId: string;

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

  it('should create a characters', async () => {
    const createDto: CreateCharactersDto = {
      id: 123456,
      title: 'Teste e2e',
      description: 'registro teste',
      thumbnail: '',
    };
    const response = await request(app.getHttpServer())
      .post('/characters')
      .send(createDto)
      .expect(201);
    expect(response.body).toHaveProperty('_id');
    createdCharacterId = response.body._id;
  });

  it('should find all characters', async () => {
    const response = await request(app.getHttpServer())
      .get('/characters')
      .expect(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should find characters by ID', async () => {
    const response = await request(app.getHttpServer())
      .get(`/characters/${createdCharacterId}`)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdCharacterId);
  });

  it('should update characters', async () => {
    const updateDto = {
      title: 'Updated Title',
      description: 'Updated Description',
      thumbnail: 'Updated Thumbnail',
    };
    const response = await request(app.getHttpServer())
      .patch(`/characters/${createdCharacterId}`)
      .send(updateDto)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdCharacterId);
    expect(response.body);
  });

  it('should find by thunbnail character', async () => {
    const response = await request(app.getHttpServer())
      .get(`/characters/getThunbnail/${createdCharacterId}`)
      .expect(200);
    expect(response.body);
  });

  it('should remove characters', async () => {
    const response = await request(app.getHttpServer())
      .delete(`/characters/${createdCharacterId}`)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdCharacterId);
  });

  it('should find by name character', async () => {
    const response = await request(app.getHttpServer())
      .get(`/characters/findByName/Gamora`)
      .expect(200);
    expect(response.body);
  });
});
