class Entrenador {
    constructor(nombre, apellido, direccion, especialidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.especialidad = especialidad;
        this.rutinas = [];
    }

    registrar() {
        console.log("Entrenador registrado:", this.nombre, this.apellido);
    }

    consultar() {
        console.log("Nombre:", this.nombre, this.apellido);
        console.log("Especialidad:", this.especialidad);
    }

    verEntrenador() {
        console.log("Entrenador:", this.nombre, this.apellido);
        console.log("Especialidad:", this.especialidad);
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina);
        rutina.entrenador = this;
    }
}

module.exports = Entrenador;
