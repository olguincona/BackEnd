const http = require("http");
const { hostname } = require("os");

const server = http.createServer((req, ans) => {
    const fechayHora = new Date(Date.now());
    const Hora = fechayHora.getHours();
    let Saludo;
    if (Hora >= 6 && Hora <= 12) {
        Saludo = "Buenos Dias"
    }else if (Hora >= 13 && Hora <= 19) {
        Saludo = "Buenas Tardes"
    }else if (Hora >= 20 && Hora <= 5) {
        Saludo = "Buenas Noches"
    }
    ans.end(Saludo);
});

const serverConected = server.listen(8081, () => {
    console.log(`Server escuchando ${serverConected.address().port}`);
});