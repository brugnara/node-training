/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

const debug = require('debug')('corso:commander');
const Router = require('koa-router');

module.exports = function (options) {

  options = options || {};

  if (!options.redis) {
    throw new Error('missing redis');
  }

  const redisClient = options.redis();
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

  return router;
};
