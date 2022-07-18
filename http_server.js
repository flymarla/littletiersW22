const express = require('express');
const app = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
// YOUR CODE

// init the data store
db.defaults({ users: []}).write();

// data parser - used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// return all users
app.get('/data', function(req, res){     
    res.send(db.get('users').value());
});

// post route
app.post('/test', function(req, res){
    console.log("consoleLog:  ", req.body.username, req.body.password) //req.body.username, req.body.password
    res.send("res send req: " + req.body.username + " " + req.body.password);
});


app.post('/add', function(req, res){
    const user = {
        'name'          :req.body.name,
        'dob'           :req.body.dob,
        'email'         :req.body.email,
        'username'      :req.body.username,
        'password'      :req.body.password,
        'phone'         :req.body.phone,
        'streetaddress' :req.body.streetaddress,
        'citystatezip'  :req.body.citystatezip,
        'latitude'      :req.body.latitude,
        'longitude'     :req.body.longitude,
        'avatar'        :req.body.avatar
        };
        db.get('users').push(user).write();
        console.log(db.get('users').value());
        res.send(db.get('users').value());
});


// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});

// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000!')
});
