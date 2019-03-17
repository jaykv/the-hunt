require('dotenv').config()

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const db = client.db('dragontinder');  
  hunterCollection = db.collection('hunters');
  seekerCollection = db.collection('seekers');
  huntCollection = db.collection('hunts');
});

app.get('/hunts', function(req, res) {
    huntCollection.find().toArray(function(err, hunts) {
      res.json(hunts);
    });
});

app.get('/seekers', function(req, res) {
    seekerCollection.find().toArray(function(err, seekers) {
      res.json(seekers);
    });

});

app.get('/hunters', function(req, res) {
    hunterCollection.find().toArray(function(err, hunters) {
      res.json(hunters);
    });
});

app.get('/employers', function(req, res) {
    res.json([
      {
        "success": true
      }
    ]);
});

app.listen(process.env.PORT || 8080);
