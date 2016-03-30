import http from 'http';
import Koa from 'koa';
import logger from 'koa-logger';

// Configs
import configViews from './views';

// Routes
import landingPageAPI from './landing-page/routes'

const app = new Koa();

// Config servers
http.createServer(app.callback());
app.listen(3000);
app.use(logger());

// Config views
app.use(configViews);

// Config routes
app.use(landingPageAPI.routes());

export default app
