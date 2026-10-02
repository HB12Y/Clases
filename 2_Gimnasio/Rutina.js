class Rutina {
    constructor(nombre, descripcion, duracion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.cliente = null;
        this.entrenador = null;
    }

    mostrar() {
        console.log("Rutina:", this.nombre);
        console.log("Descripcion:", this.descripcion);
        console.log("Duracion:", this.duracion);
    }
}

module.exports = Rutina;
