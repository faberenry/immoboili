const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //visualizzazione di tutti gli annunci
  //bisogna prendere la collectin:Annunci e visualizzarli tutti
  res.render('annunci/index');
});

router.get('/insert', (req,res) =>{
  //visualizzazione form per immissione dati dell'annuncio da parte del locatore
 // res.render('annunci/insert',{annuncio: new Annuncio()});
});

router.post('/insert', async (req,res) =>{
  //inserimento del DB dell'annuncio
});

router.get('/myannunci', async (req, res) => {
  //visualizzazione annunci basasti sul singolo locatore loggato
  //al sito web
});

module.exports = router;
