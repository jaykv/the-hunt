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

app.get('/jobs', function(req, res) {

    res.json([ 
    	{
    		"company": 'geico', 
    		"job-name": 'babysitter', 
    		"description": 'do stuff', 
    		"recruiter": 'bob smith'
    	},

    	{

    	},



    ]);
});

app.get('/companies', function(req, res) {

    res.json([
    	{
    		"name": 'geico',
    		"main-recruiter": 'bob smith',
    	},
    ]);

});

app.get('/employees', function(req, res) {

    res.json([
    	{
    		"name": 'john porter',
    		"gpa": 3.9,
    		"address": ''.
    		"phone": '',
    		"bio": '',
    		"major": '',
    		"university": '',
    		"github": '',
    		"linkedin": ''
    	}
    ]);

});


app.get('/employers', function(req, res) {

    res.json([
    	{
    		"success": true
    	}
    ]);

});

app.listen(process.env.PORT || 8080);
