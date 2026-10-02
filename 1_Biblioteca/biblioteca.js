const Libro = require("./Libro");
const Usuario = require("./Usuario");
const Prestamo = require("./Prestamo");

let libro1 = new Libro("El Principito", "Antoine de Saint-Exupery", "Novela", 1943);
let libro2 = new Libro("Cien años de soledad", "Gabriel Garcia Marquez", "Novela", 1967);

let usuario1 = new Usuario("Carlos", "123456789", "3001234567");

let prestamo1 = new Prestamo("01/10/2026", "15/10/2026", libro1);
let prestamo2 = new Prestamo("02/10/2026", "16/10/2026", libro2);

usuario1.solicitarPrestamo(prestamo1);
usuario1.solicitarPrestamo(prestamo2);

libro1.mostrar();
console.log("--------------------");
usuario1.mostrarPrestamos();
