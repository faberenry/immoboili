const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">

        <title> IMMOBOILI </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="style.css" rel="stylesheet" type="text/css">

        <meta name="description" content="Un sito di immobili">
        <meta name="keywords" content="immobili">

        <style type="text/css">
            .stileOrange { color: #FFA500 }
        </style>

        <!--
        <style>
            body{ display:flex; min-height:100vh; flex-direction:column; }
            .main-content{flex:1;}
        </style>
        -->
    </head>
    <body>
        <header id="header">
            <img src="logo.png" alt="Errore di caricamento!" ALIGN="left" width="40" height="40"> 
            <span class="stileOrange" size="7"> &#8287; &#8287; IMMOBOILI </span>

            <div style="float:right;">
                <!--
                <input type="button" id="butType1" name="but1" value="Home" onclick="location.href='http://127.0.0.1:5500/main.html';" />
                <input type="button" id="butType2" name="but2" value="Chi siamo" onclick="location.href='http://localhost/chiSiamo.html';" />
                <input type="button" id="butType2" name="but3" value="Contattaci" onclick="location.href='http://localhost/contatti.html';" />
                <input type="button" id="butType2" name="but4" value="Offerte" onclick="location.href='http://localhost/offerte.html';" />
                -->

                <a href="./main.html" id="butType1" >Home</a>
                <a href="./chiSiamo.html" id="butType2" >Chi siamo</a>
                <a href="./contatti.html" id="butType2" >Contattaci</a>
                <a href="./offerte.html" id="butType2" >Offerte</a>

            </div>
        </header>

        <main id="main" class="center-text">
            <a href="#" class="btn">cristo risorto bastardo</a>

            <input type="text" id="research" name="research" required minlength="6" maxlength="35" size="40" placeholder="mannaggia alla madonna">
        </main>
        
        <footer id="footer" class="main-footer">

            Informazioni generali azienda...
        </footer>
    </body>

</html>

<!--
    <div id="header">
            <img src="logo.png" alt="Errore di caricamento!" ALIGN="left" width="40" height="40"> 
            <span class="stileOrange" size="7"> &#8287; &#8287; IMMOBOILI </span>

            <input type="button" id="butType1" value="Home" onclick="location.href='http://localhost/main.html';"/>
            <input type="button" id="butType2" value="Chi siamo" onclick="location.href='http://localhost/chiSiamo.html';" />
            <input type="button" id="butType2" value="Contattaci" onclick="location.href='http://localhost/contatti.html';" />
            <input type="button" id="butType2" value="Offerte" onclick="location.href='http://localhost/offerte.html';" />

        </div>
--></link>