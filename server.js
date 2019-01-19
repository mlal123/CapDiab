const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000
const matter = require('matter-js');


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

  sugarScripts = [];
  sugarScripts.push('../static/scripts/sugarsugar.js')
  sugarScripts.push('../static/scripts/matter.js');

  res.render('sugarsugar.pug', { scripts: sugarScripts });

});

app.listen(port, () => console.log(`Diab-Games listening on port ${port}!`))
