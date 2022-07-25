const {Router} = require ("express")

const routerProsuctos = new Router();

routerProsuctos.get("/", (req, res) => {
    res.json({message: "Productos Router"})
})


module.exports = routerProsuctos;