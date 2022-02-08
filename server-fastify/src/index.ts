import 'dotenv/config';
import Fastify from 'fastify';
import { createConnection } from 'typeorm';
import apiRoutes from './routes/api';

const PORT = parseInt(process.env.PORT!, 10);

createConnection()
  .then(async (connection) => {
    const fastify = Fastify({
      logger: true,
    });

    fastify.register(apiRoutes, { prefix: '/api' });

    fastify.listen(PORT, '127.0.0.1', function (err, address) {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    });
  })
  .catch((err) => console.log(err));
