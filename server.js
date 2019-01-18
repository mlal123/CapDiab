const express = require('express')
const app = express()
const port = process.env.PORT || 8000


// Home Page
app.get('/', (req,res) => {

  res.render("index.pug")

});

// Maggie's Game
app.get('/maggie', (req,res) => {

  console.log ("rendering maggie...");
  res.render('maggie.pug');

});

// Sugar sugarsugar
app.get('/sugarsugar', (req,res) => {

  console.log ("rendering sugar sugar...");
  res.render('sugarsugar.pug');

});

app.listen(port, () => console.log(`Diab-Games listening on port ${port}!`))
