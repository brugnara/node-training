/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

const debug = require('debug')('corso:index');
const redis = require('redis');

const redisSubscribe = redis.createClient();
const redisClient = redis.createClient();

redisSubscribe.subscribe('test:event');

redisSubscribe.on('message', function(channel, data) {
  console.log(channel, data);
});

redisClient.set('test:ciao', 1, (err, res) => {
  console.log(err, res);
});

// redisClient.end();
