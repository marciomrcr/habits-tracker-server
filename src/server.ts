import cors from '@fastify/cors';
import Fastify from 'fastify';
import { prisma } from './lib/prisma';

const app = Fastify();

app.register(cors);
// app.register(cors, {
//   origin: ['localhost:3000'],
// });

app.get('/', async () => {
  const habits = await prisma.habit.findMany({
    select: {
      title: true,
    },
    orderBy: {
      title: 'asc',
    },
  });
  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server is Running');
  });
