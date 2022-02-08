import { FastifyPluginCallback } from 'fastify';
import socialRoute from './social';

const authRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.register(socialRoute, { prefix: '/social' });
  done();
};

export default authRoute;
