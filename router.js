/**
 * Created by brugnara on 15/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

const Router = require('koa-router');
const koaBody = require('koa-body');
const Debug = require('debug');
const DEFAULT_SCOPE = 'corso:router';

module.exports = function (options) {

  options = options || {};

  const router = new Router();
  const debug = Debug(options.scope || DEFAULT_SCOPE);

  // get
  function test() {

  }

  router.get('/', function*(next) {

    this.body = {
      status: 'ok',
      data: {}
    };

    yield next;

  });

  return router;

};

