import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import dotenv from 'dotenv';
import { Movie } from './entities/movie.entity';

dotenv.config();

export default MikroORM.init({
  dbName: `patflix`,
  type: `postgresql`,
  host: `COME BACK`,
  port: Number(`COME BACK`),
  user: `COME BACK`,
  password: `COME BACK`,
  entities: [Movie],
  discovery: { disableDynamicFileAccess: false },
  debug: process.env.NODE_ENV === `development`,
});
