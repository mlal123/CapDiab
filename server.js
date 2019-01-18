const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000



// Static files will be stored in 'public'
app.use( express.static('public'));

app.use('/static', express.static('public'));


// Home Page
app.get('/', (req,res) => {

  res.render("index.pug")

});

// Maggie's Game
app.get('/maggie', (req,res) => {

  res.render('maggie.pug');

});

// Sugar sugarsugar
app.get('/sugarsugar', (req,res) => {

  res.render('sugarsugar.pug');

});

app.listen(port, () => console.log(`Diab-Games listening on port ${port}!`))
