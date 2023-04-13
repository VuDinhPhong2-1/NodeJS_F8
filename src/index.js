const path = require('path');
// khai bao express
const express = require('express');
// khai bao morgan
const morgan = require('morgan');
// khai bao hbs
const { engine } = require("express-handlebars");
const app = express();
const port = process.env.PORT || '3000';

// khai bao duong dan cua connect
const db = require('./config/db');

// Connect to DB
db.connect();

// khai bao route
const route = require('./routes');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// kiem tra cac url se kiem tra cac file tinh o thu muc public nay
app.use(express.static(__dirname + '/public'));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// su dung route o file src/routes/index duoc import vao
route(app);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));