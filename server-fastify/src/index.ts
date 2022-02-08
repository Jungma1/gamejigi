import Fastify from 'fastify';
import { createConnection } from 'typeorm';
import apiRoutes from './routes/api';

createConnection()
  .then(async (connection) => {
    const fastify = Fastify({
      logger: true,
    });

    fastify.register(apiRoutes, { prefix: '/api' });

    fastify.listen(4000, '127.0.0.1', function (err, address) {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    });
  })
  .catch((err) => console.log(err));
