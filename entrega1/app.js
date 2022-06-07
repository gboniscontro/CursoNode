class Libro {
    constructor(nombre, autor) {
        this.nombre = nombre
        this.autor = autor
    }
}
class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre
        this.apellido = apellido
        Array.isArray(libros) ? this.libros = libros : this.libros = []
        Array.isArray(mascotas) ? this.mascotas = mascotas : this.mascotas = []
        //console.log(this.libros)
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(nombre) {
        this.mascotas.push(nombre)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(nombre, autor) {
        this.libros.push(new Libro(nombre, autor))
    }
    getBookNames() {

        return this.libros.map((o) => o.nombre)
    }

}
let pepe = new Usuario("pepe", "Perez",
    [
        new Libro('El señor de las moscas', 'William Golding'),
        new Libro('Fundacion', 'Isaac ASIMOV')
    ]
    , ['perro', 'gato'])

console.log(pepe.getBookNames())
let elon = new Usuario("Elon", "Musk")
elon.addBook("El sr", "william")
elon.addBook("Anillo", "shuko")
elon.addMascota("caballo")
elon.addMascota("perro")
console.log(elon.countMascotas())
console.log(elon.getFullName())
console.log(elon.getBookNames())
