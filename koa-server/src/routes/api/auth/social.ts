import Router from '@koa/router';
import passport from 'koa-passport';

const social = new Router();

/**
 * GET /api/auth/social/google
 * Google Signin
 */
social.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

/**
 * GET /api/auth/social/google/callback
 * Google Signin callback url
 */
social.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  async (ctx, next) => {
    ctx.response.body = ctx.state.user;

    return next();
  }
);

export default social;
