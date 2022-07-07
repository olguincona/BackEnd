class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    static saludo = "Hola";
    getFullName () {
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
    saludoEstatico () {
        console.log(Usuario.saludo)
    }

}
class Mascotas {
    constructor (raza){
        this.raza = raza;
    }
    static cuentaTotal = 0

    addMascota () {
        this.raza += 1;
        Mascotas.cuentaTotal += 1;
    }
}
const gato = new Mascotas("Gato")
const perro = new Mascotas("Perro")
console.log(`El contador total es: ${Mascotas}`)

