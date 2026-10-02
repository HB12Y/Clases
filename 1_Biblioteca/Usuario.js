class Usuario {
    constructor(nombre, documento, telefono) {
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.prestamos = [];
    }

    solicitarPrestamo(prestamo) {
        this.prestamos.push(prestamo);
    }

    mostrarPrestamos() {
        console.log("Prestamos de", this.nombre);
        this.prestamos.forEach((prestamo) => {
            prestamo.mostrar();
        });
    }
}

module.exports = Usuario;
