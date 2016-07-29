/**
 * Created by brugnara on 29/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

const debug = require('debug')('corso:index');
const koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const fs = require('fs');

const validator = require('validator');

const app = koa();

const router = new Router();
router.get('/data', function*() {
  this.body = {
    status: 'ok',
    data: [1,2,3,4,5,6]
  }
});

app.use(router.routes());
app.use(serve(__dirname + '/../public/'));

/*
app.use(function*() {
  this.set('Content-Type', 'text/html');
  this.body = fs.createReadStream(__dirname + '/../public/index.html');
});
*/

/*
app.use(function*() {
  debug(validator('ciao'));

  this.body = {
    status: 'ok',
    valid: validator('ciao'),
    invalid: validator('not ciao')
  };

});
*/

app.listen(4000, '0.0.0.0', () => {
  debug('Listening on :4000');
});
