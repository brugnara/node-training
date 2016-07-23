'use strict';

const debug = require('debug')('corso:index');
const koa = require('koa');

const ciao = 'ciao Nicola';

debug('loading ${ciao}');
debug(`ti sto per dire: ${ciao}`);

const port = process.env.PORT || 3000;
const host = '0.0.0.0';
const app = koa();

const Router = require('koa-router');

const error_404 = require('middlewares/errors/404');
const error_500 = require('middlewares/errors/500');
const apiRouter = require('middlewares/api');

// error handler
app.use(error_500());

const router = new Router();
router.use('/api', apiRouter({ scope: 'corso:api'}).routes());

const apiV2Router = apiRouter({ scope: 'corso:apiv2'});
router.use('/api/v2', apiV2Router.routes());

// routes
app.use(router.routes());

// 404, not found
app.use(error_404());

app.listen(port, host, () => {
  debug('app running!');
  debug('listening on %s:%d', host, port);
});

