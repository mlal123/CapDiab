const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000

var options = {};


// Static files will be stored in 'public'
app.use( express.static('public'));

app.use('/static', express.static('public'));

// set views folder
app.set('views', 'views');



// Home Page
app.get('/', (req,res) => {

  res.render("index.pug")

});

// Maggie's Game
app.get('/maggie', (req,res) => {

  res.render('maggie.pug');

});

// sugarsugar
app.get('/sugarsugar', (req,res) => {



  res.render('sugarsugar/sugarsugar.pug');

});

app.listen(port, () => console.log(`Diab-Games listening on port ${port}!`))
