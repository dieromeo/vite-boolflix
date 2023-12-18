# Boolflix

Sviluppo d una web app per la ricerca di film e serie tv, e la consultazione degli stessi per informazioni quali titolo, lingua, voto e trama.

## Feature 
 - Sezione popolari per film e serie del momento
 - Possibilità di ricerca per titolo anche parziale
 - Effetto di transizione per la visualizzazione delle info
 - Gestito caso di errore in caso di copertina mancante

### Logo

![Logo](./public/logo.png)

La colorazione del logo è stata realizzata tramite il *linear gradient* del background, successivamente trasferita al testo nel seguente modo:

```
 background-clip: text;
-webkit-text-fill-color: transparent;
```

### Sezione popolari

Al caricamento della pagina vengono mostrati tramite una chiamata API film e serie tv popolari del momento, in costante aggiornamento.

### Funzionalità di ricerca e display delle card

Possibilità di ricerca di film e serie tv, anche attraverso l'immissione parziale del titolo. Al click sul bottone o all' enter avviene la chiamata APi con le query corrispondenti al valore di ricerca.
All'over con il mouse sulla card, tramite una variabile di stato, ed una funzione che la modifica, vengono mostrate le info corrispondenti quali:
- titolo
- titolo originale
- lingua
- voto
- trama.

Gestito il caso in cui il titolo e il titolo originale siano uguali; verrà mostrato solo il titolo.

Gestito il caso in cui non sia presente l'immagine di copertina, verrà al suo posto mostrata un immagine di backup.

Nel caso in cui la lingua corrisponda ad italiano o inglese, al suo posto, tramite un `v-if` verrà mostrate la bandiera corrispondente

Il voto è stato gestito in modo che tramite una funzione venga trasformato da decimali in quinti, interi, approssimati per eccesso. Successivamente tramite un ciclo `v-for` vengono mostrate le stelle corrispondenti.

## Librerie e pacchetti utilizzati

- Bootstrap
- Sass
- Axios
- Font awesome
- Google font Lato


