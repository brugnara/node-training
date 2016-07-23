/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

// moduli
const debug = require('debug')('corso:index');
const koa = require('koa');
const Router = require('koa-router');
const redis = require('redis');

const PORT = process.env.PORT || 3000;
const HOST = process.env.IP || '0.0.0.0';
// redisip = '192.168.0.213';
// init
const app = koa();
// const redisClient = redis.createClient(6379, '192.168.0.213');
const redisClient = redis.createClient();

// routing
const router = new Router();
/*
router.get('/incr/:key', function*(next) {

  debug('params.key = %s', this.params.key);

  const res = yield new Promise((ack, reject) => {

    debug('in promise params.key = %s', this.params.key);

    redisClient.incr(this.params.key, function(err, res) {
      if (err) {
        return reject(err);
      }
      ack(res);
    });
  });

  this.body = {
    status: 'ok',
    data: res
  };

  //
  yield next;
});

router.get('/get/:key', function*(next) {

  const res = yield new Promise((ack, reject) => {

    debug('in promise params.key = %s', this.params.key);

    redisClient.get(this.params.key, function(err, res) {
      if (err) {
        return reject(err);
      }
      ack(res);
    });
  });

  this.body = {
    status: 'ok',
    data: res
  }
  //
  yield next;
});
*/


router.get('/:command/:key', function*(next) {

  debug('executing command: %s on key: %s',
    this.params.command, this.params.key);

  if (!redisClient[this.params.command]) {
    return this.throw(404,
      'Command not found: ' + this.params.command);
  }

  const res = yield new Promise((ack, reject) => {

    debug('in promise params.key = %s', this.params.key);

    redisClient[this.params.command](this.params.key, function(err, res) {
      if (err) {
        return reject(err);
      }
      ack(res);
    });
  });

  this.body = {
    status: 'ok',
    data: res
  }
  //
  yield next;
});

app.use(router.routes());

app.listen(PORT, HOST, () => {
  debug(`listening on ${HOST}:${PORT}`);
});
