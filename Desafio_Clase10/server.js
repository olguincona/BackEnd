const express = require("express");
const pug = require('pug');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/productos', (req, res) => {
    res.render('productos', {
        title: 'Coderhouse App',
        msg: 'Este es un mensaje, este es el motor pug'
    });
})


app.post('/productos', (req, res) =>{
    res.render('productos', {
        title: "Titulo", 
        msg:"Mensaje", 
        mail: "Mail",
    }); 
})


const PORT = process.env || 8080;
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
});