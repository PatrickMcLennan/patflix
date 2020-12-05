import { MikroORM } from '@mikro-orm/core';
import config from '../config/mikro-orm';
import { Movie } from '../../entities/movie.entity';

export default async (req, res) => {
  const orm = await MikroORM.init(config);
  const users = await orm.em.find(User);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ user: users }));
};
