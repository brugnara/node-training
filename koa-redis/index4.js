/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

// moduli
const debug = require('debug')('corso:index');
const koa = require('koa');
const Router = require('koa-router');
const mongo = require('mongodb').MongoClient;
const co = require('co');

const MongoRouter = require('./routes/mongo-test');

const PORT = process.env.PORT || 3000;
const HOST = process.env.IP || '0.0.0.0';
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/test_praim';
// const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost,192.168.1.1,192.168.2.1/test_praim';

// init
let db;

/*mongo.connect(MONGO_URL, function(err, _db) {
  if (err) {
    debug(err);
    process.exit(1);
  }
  debug('db connected!');
  db = _db;

  const app = koa();
  const mongoRouter = MongoRouter({});

  app.use(mongoRouter.routes());

  app.listen(PORT, HOST, () => {
    debug(`listening on ${HOST}:${PORT}`);
  });

});
debug('sono qui');
*/
co(function*() {
  db = yield mongo.connect(MONGO_URL);
  debug('db connected');

  const app = koa();
  const mongoRouter = MongoRouter({
    collection: db.collection('coll_tes')
  });

  app.use(mongoRouter.routes());

  app.listen(PORT, HOST, () => {
    debug(`listening on ${HOST}:${PORT}`);
  });

}).catch(function(err) {
  debug(`disastro! ${err.message}\n`+ err.stack);
  // process.exit(1);
});

