/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

const debug = require('debug')('corso:mongo-test');
const Router = require('koa-router');
const ObjectID = require('mongodb').ObjectID;

module.exports = function (options) {
  options = options || {};

  if (!options.collection) {
    throw new Error('missing collection');
  }

  const router = new Router();

  router.get('/get/:id', function*(next) {
    this.body = {
      status: 'ok',
      data: yield options.collection.find({
        _id: new ObjectID(this.params.id)
      }).limit(1).next()
    }
  });

  router.get('/get2/:key', function*(next) {
    this.body = {
      status: 'ok',
      data: yield options.collection.find({
        key: this.params.key
      }).toArray()
    }
  });

  // db.coll_tes.aggregate([{$match:{key:'a'}},{$group:{_id:'$key', count: {$sum: 1}}}])
  // db.coll_tes.aggregate([{$group:{_id:'$key', count: {$sum: 1}}}])

  router.get('/get3/:key', function*(next) {
    this.body = {
      status: 'ok',
      data: yield options.collection.find({
        'example.key': this.params.key
      }).toArray()
    }
  });

  router.get('/set/:key/:value', function *(next) {
    debug('sono qui con', this.params.key, this.params.value);

    let res = yield options.collection.insertOne({
      key: this.params.key,
      value: this.params.value,

      example: {
        key: this.params.key,
        data: {
          value: this.params.value,
          date: new Date()
        }
      }
    });

    //

    this.body = {
      status: 'ok',
      data: res
    };

    yield next;
  });

  return router;

};
