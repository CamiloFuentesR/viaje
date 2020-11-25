//sintis de comonnjs
// const express = require('express');
//sintaxis de import
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

import dotenv from 'dotenv';
dotenv.config({path:'variables.env'})


const app = express();

//conectar la base de datos
db.authenticate()
    .then(() => console.log('base de datos conectada'))
    .catch(error => console.log(error));

//definir puerto 
const port  = process.env.PORT || 4000;
const host  = process.env.HOST || '0.0.0.0';


//habilitar pug
app.set('view engine','pug');

app.use((req,res,next) => {
    
    const year = new Date();
    res.locals.nombreSitio = 'Agencia de viajes';
    res.locals.actualYears = year.getFullYear();
    next();
});

//agregar bodyparser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//definir la carpeta publica
app.use(express.static('public'));

//agregar router
app.use('/',router);

app.listen(port,host, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});