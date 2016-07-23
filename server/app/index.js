/**
 * Created by brugnara on 14/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

const debug = require('debug')('corso:index');
const koa = require('koa');
const error_404 = require('404');
const error_500 = require('500');
const logger = require('logger');
const api = require('api');
const Router = require('koa-router');

const app = koa();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const apiRouter = new Router();
apiRouter.use('/api', api().routes());

app.use(logger());
app.use(error_500());
app.use(apiRouter.routes());
app.use(error_404());

app.listen(port, host, () => {
  debug('listening on %s:%s', host, port);
});
