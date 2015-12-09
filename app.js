var express = require('express');
var app = express();
var tag = require('./routes/tags');
var bodyParser = require('body-parser');

// Serve static pages
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function (req, res) {
  res.render('index');
});

app.use('/', tag);

module.exports = app;