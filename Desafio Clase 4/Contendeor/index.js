const fs = require("fs");
const data = fs.readFileSync("test.json", "utf-8");

const tienda = JSON.parse(data);

tienda.Prodductos.push({
            "title": "Remera Gris",
            "price": "55 USD",
            "thumbnail": "https://www.segutecnica.com/images/000000000001756537023remera-gris-segutecnica.png"
});
console.log(tienda);

fs.writeFileSync("example.json", JSON.stringify(tienda));

const { Prodductos } = tienda;

const title = "Remera nueva";

//const remera = tienda.filter((remera) => remera.title == title);

//console.log(`El producto es: ${title} y su precio es ${Prodductos.price}`)

const newProduct = tienda.filter((remera) => remera.title !== title);

tienda.Prodductos = newProduct;

fs.writeFileSync("test.json", JSON.stringify(tienda, null, 2));

/* const data = fs.readFileSync("test.json", "utf-8");

console.log(JSON.parse(data)); */