import Fastify from 'fastify';
import apiRoutes from './routes/api';

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
