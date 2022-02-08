import { FastifyPluginCallback } from 'fastify';

const socialRoute: FastifyPluginCallback = (fastify, opts, done) => {
  /**
   * GET /api/auth/social/google
   * Google Signin
   */
  fastify.get('/google', async (request, reply) => {
    return { hello: 'google!' };
  });

  done();
};

export default socialRoute;
