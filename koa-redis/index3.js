/**
 * Created by brugnara on 22/07/16,
 * @ daniele@brugnara.me
 */

'use strict';

// moduli
const debug = require('debug')('corso:index');
const koa = require('koa');
const Router = require('koa-router');
const Redis = require('ioredis');
const CommanderRouter = require('./routes/commander');

const PORT = process.env.PORT || 3000;
const HOST = process.env.IP || '0.0.0.0';
// redisip = '192.168.0.213';
// init
const app = koa();
// const redisClient = new Redis(6379, '192.168.0.213');

const commanderRouter = CommanderRouter({
  redis: function() {
    return new Redis()
  }
});

app.use(commanderRouter.routes());

app.listen(PORT, HOST, () => {
  debug(`listening on ${HOST}:${PORT}`);
});
