var express = require('express');
var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
// var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var artistsController = require('./controllers/artists');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/artists',artistsController.all); 

app.get('/artists/:id', artistsController.findById);    

app.post('/artists',artistsController.create);   

app.put('/artists/:id', artistsController.update);    

app.delete('/artists/:id', artistsController.delete);
    

app.get('/',function(req, res){
    res.send('HELLO API');
});

db.connect('mongodb://localhost:27017/myapi',/*{ useNewUrlParser: true },*/ function(err){
    if(err){
        return console.log(err);
    }
    app.listen(3000, function(){
        console.log('API app started')
    });
});