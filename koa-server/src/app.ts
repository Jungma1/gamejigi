import Koa from 'koa';
import routes from './routes';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';
import { passportConfig } from './lib/passport';

const app = new Koa();

app.use(passport.initialize());
passportConfig();
app.use(bodyParser());
app.use(routes.routes());
app.use(routes.allowedMethods());

export default app;
