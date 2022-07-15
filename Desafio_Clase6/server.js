const express = require("express");
const app = express();
let visitas = 0;

app.get('/', (req, res) => {
    res.send("<h1 style='color: blue'>Bienvenidos al servidor expess</h1>");
});

app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`La cantidad de visitas ${visitas}`);
})

app.get('/fyh', (req, res) => {
    const fechayHora = new Date(Date.now()).toLocaleString();
    res.send({fyh: fechayHora});
})

const PORT = 8081;

const Server = app.listen(PORT, ()=>{
    console.log((`Servidor escuchando en puerto ${PORT}`));
})
