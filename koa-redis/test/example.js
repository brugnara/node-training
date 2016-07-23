/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

// test requirements
require('co-mocha');
const should = require('should');
const Redis = require('ioredis');
const request = require('superagent');

// utils
const debug = require('debug')('test:corso:example');

// module to test

describe.skip('# example', function () {

  let redisClient;

  before(function () {
    redisClient = new Redis();
  });

  describe('test da zero', function () {

    const KEY = 'test:mocha';

    beforeEach(function*() {
      yield redisClient.del(KEY);
    });

    it('should throw an error', function() {
      should.throws(function() {
        throw new Error('Errore');
      }, /Errore/i);
    });

    it('should increment to 1', function (done) {
      request
        .get(`http://localhost:3000/incr/${KEY}`)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.body.should.have.property('status', 'ok');
          res.body.should.have.property('data', 1);

          //

          done();
        });
    });

  });

});
