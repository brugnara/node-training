
# esercizi
> da far!

## goal

- koa con middleware router
- router middleware

## docs

Path router, fondamentali per gestione di routing

```js
// GET /ciao/:mandatory
console.log(this.params.value);

// GET /ciao/oaic/:facoltativa?
console.log(this.params.facoltativa);
```

## router

```
var Router = require('koa-router'); // NON koa-route, occhio
var router = Router();

router.use(...);
```

Requirements: deve essere un modulo che ritorna un `new Router()`
personalizzato con le rotte.

- lettura su redis
- scrittura su redis
- middleware si inizializza con come opzione, una callback che ritorna
  un nuovo client ioredis. (Importante che ogni modulo abbia modo di creare
  uno o più redisClient essendo questi "bloccanti" in caso di pub/sub).


- redis wrapper con REST
