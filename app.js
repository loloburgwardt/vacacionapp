const express = require ('express');
const app = express();

//seteamos las configuraciones de express
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());


