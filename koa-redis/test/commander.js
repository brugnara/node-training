/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

// test requirements
require('co-mocha');
const should = require('should');
const http = require('http');
const request = require('supertest');
const koa = require('koa');
const chance = new (require('chance'))()

// utils
const DEBUG_SCOPE = 'test:corso:commander';
const debug = require('debug')(DEBUG_SCOPE);
const Redis = require('ioredis');

// module to test
const Module = require('../routes/commander');

describe('# commander', function () {

  let app;
  let redisClient;

  describe('constructor validator', function() {

    it('should die with an error', function() {
      should.throws(function() {
        Module()
      }, /missing redis/);
    });

    it('should not die and return a valid router', function() {
      let module = Module({
        redis: function() {}
      });
      (module !== null).should.be.true();
      module.should.have.property('routes').and.type('function');
    });

  });

  describe('execution', function () {

    function redisCreator() {
      return new Redis();
    }

    before(function*() {

      redisClient = redisCreator();
      app = koa();

      app.use(Module({
        redis: redisCreator
      }).routes());
    });

    const KEY = 'test:mocha';

    beforeEach(function*() {
      yield redisClient.del(KEY);
    });

    afterEach(function*() {
      yield redisClient.del(KEY);
    });

    it('should fail with command not found', function (done) {
      let command = chance.word({length: 32});
      console.log('running command:', command);
      request(http.createServer(app.callback()))
        .get(`/${command}/ciao`)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          console.log(res.text);
          res.text.should.equal(`Command not found: ${command}`);
          done();
        });
    })

    it('should increment the key: ' + KEY, function (done) {

      request(http.createServer(app.callback()))
        .get('/incr/' + KEY)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          res.body.should.have.properties({
            status: 'ok',
            data: 1
          });
          done()
        });

    });

  });

});
