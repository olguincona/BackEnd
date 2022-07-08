function numeros(numero, time, cb) {
    let i = 0;
    const imprimir = setInterval(
        ()=>{
            if (numero[i] != undefined){
                console.log(numero[i])
            }else{
                cb()
                clearInterval(imprimir);
            }
            i++
        },
        time
    ); 
}

const fin = ()=> console.log("Finalizado");

numeros(582, 0, fin);
numeros(136, 250, fin);
numeros(794, 500, fin)