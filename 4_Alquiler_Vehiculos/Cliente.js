class Cliente {
    constructor(nombre, documento, telefono) {
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.alquileres = [];
    }

    realizarAlquiler(alquiler) {
        this.alquileres.push(alquiler);
    }

    mostrarAlquileres() {
        console.log("Alquileres de", this.nombre);
        this.alquileres.forEach((alquiler) => {
            alquiler.mostrar();
        });
    }
}

module.exports = Cliente;
