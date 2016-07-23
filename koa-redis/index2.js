/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

// moduli
const debug = require('debug')('corso:index');
const koa = require('koa');
const Router = require('koa-router');
const Redis = require('ioredis');

const PORT = process.env.PORT || 3000;
const HOST = process.env.IP || '0.0.0.0';
// redisip = '192.168.0.213';
// init
const app = koa();
// const redisClient = new Redis(6379, '192.168.0.213');
const redisClient = new Redis();

// routing
const router = new Router();

router.get('/:command/:key', function*(next) {

  debug('executing command: %s on key: %s',
    this.params.command, this.params.key);

  if (!redisClient[this.params.command]) {
    return this.throw(404,
      'Command not found: ' + this.params.command);
  }

  this.body = {
    status: 'ok',
    data: yield redisClient[this.params.command](this.params.key)
  };
  //
  yield next;
});

app.use(router.routes());

app.listen(PORT, HOST, () => {
  debug(`listening on ${HOST}:${PORT}`);
});
