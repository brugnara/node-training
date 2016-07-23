

'use strict';

var debug = require('debug')('app:main');
var koa = require('koa');

var MathPraim = require('math-praim');
var ErrorHandler = require('error-handler');

var app = koa();

// error handler
var options = {
  scope: 'app:error-handler'
};
app.use(ErrorHandler(options));

app.use(function*(next) {
  this.body = 'hello ';
  yield next;
});

app.use(function*() {
  // this.body = 'hello world!';
  this.body = this.body + 'world';
  throw new Error('help us!');
});

app.listen(3000, '0.0.0.0', function() {
  debug('listening');
});
