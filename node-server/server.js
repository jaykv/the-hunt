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

app.get('/add/hunters', function(req, res) {
  //var file = cat('./hunters.json');
  //var f = JSON.parse(file);
  hunterCollection.insertMany(f);
  res.json({"success":true});
});



app.get('/add/hunts', function(req, res) {
  //var file = cat('./hunts.json');
  //var o = JSON.parse(file);
  huntCollection.insertMany([
  {
    "Company": "GEICO",
    "Job Name": "Babysitter for the Gecko",
    "Description": "Protect the precious gecko.",
    "Recruiter": "Tony Nicely"
  },
  {
    "Company": "GEICO",
    "Job Name": "Litigation Attorney",
    "Description": "Travel as required, including but not limited, to attend trials, hearings, depositions, management meetings and conferences.",
    "Recruiter": "Vinny Gambini"
  },
  {
    "Company": "Johnson & Johnson",
    "Job Name": "Snake Milker",
    "Description": "Collect the venmon of poisonous snakes in jars for use in anti-venoms and other medication.",
    "Recruiter": "Steve Irwin"
  },
  {
    "Company": "Purina ONE",
    "Job Name": "Dog Food Taster",
    "Description": "Taste new dog food products, including bones, tinned meat, and biscuits for flavor and texture in comparison to rival dog food brands.",
    "Recruiter": "Gordon Ramsey"
  },
  {
    "Company": "Nemo, Inc.",
    "Job Name": "Scuba Diving Pizza Delivery Man",
    "Description": "Supply guests with pizza by carrying them through the sea in a watertight case.",
    "Recruiter": "Marlin & Dory"
  },
  {
    "Company": "Netflix",
    "Job Name": "Full-Time Netflix Viewer",
    "Description": "Watch all content before it is available to the public and review and assign each TV show or movie to its correct tag. Help viewers find exactly what they're for.",
    "Recruiter": "Stranger Things' Cast"
  },
  {
    "Company": "Hilton",
    "Job Name": "Professional Sleeper",
    "Description": "Sleep in a different one of the hotel beds each night and write a ewview about your satisfaction with each one.",
    "Recruiter": "Paris Hilton"
  },
  {
    "Company": "Disney",
    "Job Name": "Water Slide Tester",
    "Description": "Check all aspects of safety and make sure water rides are absolutely safe.",
    "Recruiter": "Mickey"
  },
  {
    "Company": "Purdue",
    "Job Name": "Chicken Sexer",
    "Description": "Identify the gender of a baby chicken.",
    "Recruiter": "Donald Duck"
  },
  {
    "Company": "Essie",
    "Job Name": "Nail Polish Namer",
    "Description": "Name nail polish colors using creative marketing tactics.",
    "Recruiter": "Essie Weingarten"
  }
]);
  res.json({"success": true});
});

app.get('/add/seekers', function(req, res) {
  seekerCollection.insertMany([
  {
    "Name": "GEICO",
    "Recruiter": "Liz Arden",
    "Address": "5260 Western Avenue, Chevy Chase, Md. 20815.",
    "Rating": "A",
    "Website": "geico.com"
  },
  {
    "Name": "Johnson & Johnson",
    "Recruiter": "Jonathon Johnson",
    "Address": "1 Johnson And Johnson PlzNew Brunswick NJ 08933",
    "Rating": "B",
    "Website": "jnj.com"
  },
  {
    "Name": "Purina ONE",
    "Recruiter": "Otis Cooper",
    "Address": "1 checkerboard square st louis mo",
    "Rating": "C",
    "Website": "purina.com"
  },
  {
    "Name": "Nemo, Inc.",
    "Recruiter": "Jules Verne",
    "Address": "1200 Park Ave, Emeryville, CA 94608",
    "Rating": "B",
    "Website": "nemo.com"
  },
  {
    "Name": "Netflix",
    "Recruiter": "Reed Hastings",
    "Address": "100 Winchester Cir, Los Gatos, CA 95032",
    "Rating": "A",
    "Website": "netflix.com"
  },
  {
    "Name": "Hilton",
    "Recruiter": "London Tipton",
    "Address": "7930 Jones Branch Drive McLean, Virginia 22102",
    "Rating": "A",
    "Website": "hilton.com"
  }
]);
  res.json({"success":true});
});

app.listen(process.env.PORT || 8080);
