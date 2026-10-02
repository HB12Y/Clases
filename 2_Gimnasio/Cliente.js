class Cliente {
    constructor(nombre, apellido, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.rutinas = [];
    }

    verEntrenador() {
        this.rutinas.forEach((rutina) => {
            if (rutina.entrenador) {
                console.log("Entrenador:", rutina.entrenador.nombre, rutina.entrenador.apellido);
            }
        });
    }

    verRutina() {
        console.log("Rutinas de", this.nombre, this.apellido);
        this.rutinas.forEach((rutina) => {
            rutina.mostrar();
        });
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina);
        rutina.cliente = this;
    }
}

module.exports = Cliente;
