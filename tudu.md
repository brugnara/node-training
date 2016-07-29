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

- test lato server per moduli somma e data (check formattazione YYYY_MM_DD)
- salvare su mongo i parametri e il risultato della somma fatta, come storico,
  nella forma:

```
{
  type: 'sum',
  params: {
    a: A,
    b: B
  }
}
```

- creare un path (ed un tasto lato client) che mostri a video tali log
  (non è importante la formattazione)
- modificare la `/time` in modo che accetti due parametri opzionali aggiuntici che
  permetta di chiamare `/time/5/days` e mi risponda con la data di oggi, sommata
  di 5 giorni. Esempi:
  `/time/1/year`
  `/time/12/years`
- extra ad esercizio precedente: se il numero è negativo, invece che `add`, fare
  `subtract`
