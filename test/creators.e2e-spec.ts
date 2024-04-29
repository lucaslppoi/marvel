import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { CreateCreatorDto } from 'src/creators/dto/create-creator.dto';

describe('CreatorsService (E2E)', () => {
  let app: INestApplication;
  let createdCreatorId: string;

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

  it('should create a creators', async () => {
    const createDto: CreateCreatorDto = {
      id: 123456,
      name: 'creator teste',
      role: 'name',
      comics: [],
    };
    const response = await request(app.getHttpServer())
      .post('/creators')
      .send(createDto)
      .expect(201);
    expect(response.body).toHaveProperty('_id');
    createdCreatorId = response.body._id;
  });

  it('should find all creators', async () => {
    const response = await request(app.getHttpServer())
      .get('/creators')
      .expect(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should find creators by ID', async () => {
    const response = await request(app.getHttpServer())
      .get(`/creators/${createdCreatorId}`)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdCreatorId);
  });

  it('should update creators', async () => {
    const updateDto = {
      title: 'Updated Title',
      description: 'Updated Description',
      thumbnail: 'Updated Thumbnail',
    };
    const response = await request(app.getHttpServer())
      .patch(`/creators/${createdCreatorId}`)
      .send(updateDto)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdCreatorId);
    expect(response.body);
  });

  it('should find comics by creators', async () => {
    const response = await request(app.getHttpServer())
      .get(`/creators/findComicsByCreator/${createdCreatorId}`)
      .expect(200);
    expect(response.body);
  });

  it('should remove creators', async () => {
    const response = await request(app.getHttpServer())
      .delete(`/creators/${createdCreatorId}`)
      .expect(200);
    expect(response.body).toHaveProperty('_id', createdCreatorId);
  });
});
