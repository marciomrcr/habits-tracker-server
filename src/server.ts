import cors from '@fastify/cors';
import Fastify from 'fastify';
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors);
// app.register(cors, {
//   origin: ['localhost:3000'],
// });
app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running');
  });
