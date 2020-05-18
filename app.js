const express = require ('express');
const app = express();
const methodOverride = require('method-override');
const homeRouter = require('./routes/home');
const registrarRouter = require('./routes/registrar');

//Seteamos las configuraciones de express
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'))

//Levantamos el servidor
app.listen(3030, function(){
    console.log('Server running 3030');
})

//Rutas
app.use('/', homeRouter);
app.use('/registrar', registrarRouter);
