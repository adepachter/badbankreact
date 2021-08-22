var express = require("express");
var app = express();
var cors = require("cors");
var dal = require('./dal.js');

// used to serve static files
app.use(express.static('public'));
app.use(cors());

// CREATE USER ACCOUNT
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});


// ALL ACCOUNTS
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

// DELETE ALL FROM MONGO
app.get('/account/deletall', function (req, res) {
    dal.deleteAll().
        then((user) => {
            res.send(user);
        });
        
    console.log("deleted all inputs");
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);