class Prestamo {
    constructor(fechaPrestamo, fechaDevolucion, libro) {
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.libro = libro;
    }

    mostrar() {
        console.log("Fecha del prestamo:", this.fechaPrestamo);
        console.log("Fecha de devolucion:", this.fechaDevolucion);
        console.log("Libro:", this.libro.titulo);
    }
}

module.exports = Prestamo;
