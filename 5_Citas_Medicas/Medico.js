class Medico {
    constructor(nombre, apellido, especialidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.citas = [];
    }

    registrar() {
        console.log("Medico registrado:", this.nombre, this.apellido);
    }

    consultar() {
        console.log("Medico:", this.nombre, this.apellido);
        console.log("Especialidad:", this.especialidad);
    }

    asignarCita(cita) {
        this.citas.push(cita);
        cita.medico = this;
    }

    actualizar(nuevaEspecialidad) {
        this.especialidad = nuevaEspecialidad;
    }
}

module.exports = Medico;
