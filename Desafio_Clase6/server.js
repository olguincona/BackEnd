const express = require("express");
const app = express();

app.get('/productos', (req, res) => {
    res.send("<h1 style='color: blue'>Productos</h1>");
});

app.get('/productoRandom', (req, res) => {
    res.send("Producto Random");
})

const PORT = 8081;

const Server = app.listen(PORT, ()=>{
    console.log((`Servidor escuchando en puerto ${PORT}`));
})
