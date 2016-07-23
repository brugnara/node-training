# corso
> 14/07/16

## strumenti utili

- async (waterfall, each, ...)
- stream (perché sono importanti)
- redis
- mongo

## esercizi
> async. Sì o no?

### preparazione

- ottenere un file dall'api: `GET /api/text-stream` e scriverlo
  su disco

### esercizi

- leggere un file, quindi:
  - trasformare ogni riga aggiungendo il conteggio parole e chars
    sfruttando api fornita: `POST /api/counter`
  - ripetere punto precedente, avendo cura di aggiungere davanti ad
    ogni riga, se si tratta di una riga pari o dispari (differenze
    fra each e eachSeries)
  - scrivere il file su disco


## un'applicazione
> creiamo da zero una app
