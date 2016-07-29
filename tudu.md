# corso
> 29/07/16

## Main goal

creare applicazione client-server

## server

### rotte

**GET /somma/:a/:b**

ritorna una struct

```
{ status:'ok', somma: x }
```

**GET /time**

ritorna una struct (usare moment per creare una data formattata come YYYY_MM_DD)

```
{ status: 'ok', time: xxxxxxx }
```

## client

Con browserify, includere le dipendenze atte a fare una richiesta al server
e mostrare a video il risultato di una somma:

- basic: i valori per la somma, fissi a codice
- medium: valori letti da due campi nell'html con tasto che esegue AJAX

Un secondo tasto deve cambiare un elemento nella pagina tramite id, inserendo
quindi la data ottenuta dalla chiamata `/time`

## extra

test lato server per moduli somma e data (check formattazione YYYY_MM_DD)
