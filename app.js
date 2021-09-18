const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const apiPath = '/api/';

app.use(express.json());
app.use(express.urlencoded());


app.use(express.static('client'));


app.use(apiPath + 'users', require('./routes/users.route'));

app.listen(port, ()=>{
    console.log("hello");
});