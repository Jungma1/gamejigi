import Router from '@koa/router';
import social from './social';

const auth = new Router();

auth.use('/social', social.routes());

export default auth;
