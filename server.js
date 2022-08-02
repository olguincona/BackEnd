const express = require("express");
const pug = require('pug');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) =>{
    res.render('index', {
        titulo: "Titulo", 
        mensaje:"Mensaje", 
        autor: "Autor", 
        version: "1"});
})
const PORT = process.env || 8080;
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
});