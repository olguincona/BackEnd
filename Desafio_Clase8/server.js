const { Router } = require('express')
const express = require("express")
const multer = require("multer")
const {Router} = express
const { auth } = require("./middlewares/auth")
const routerProductos = require("./routes/productos")


const Contenedor = require("./utils/contenedor");
const dbName = "db.json";
const contenedor = new Contenedor(dbName);

const app = express()
const router = Router()
const PORT = 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/api/productos2", routerProductos)

app.use((req, res, next) => {
    const date = new Date(Date.now());
    console.log(date.toLocaleString());
    next();
})

app.get("/api/productos", (req, res) => {
    const listaProductos = contenedor.getAll();
    res.json(listaProductos)
    console.log(req.query);
})

app.get("/api/productos:id", (req, res) => {
    const id = parseInt(req.params.id);
    const productos = contenedor.getByID(id);
    res.json(productos);
})
app.post("/api/productos", (req, res) => {
    const listaProductos = contenedor.createFileIfNotExists();
    res.json(listaProductos)
    console.log(req.query);
})

app.put("/api/productos:id", (req, res) => {
    const id = parseInt(req.params.id);
    const productos = contenedor.getByID(id);
    res.json(productos);
})
const server = app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`);
})