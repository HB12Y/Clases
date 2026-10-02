class Paciente {
    constructor(nombre, apellido, telefono, direccion, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.historialMedico = [];
        this.citas = [];
    }

    consultar() {
        console.log("Paciente:", this.nombre, this.apellido);
        console.log("Telefono:", this.telefono);
        console.log("Direccion:", this.direccion);
        console.log("Correo:", this.correo);
    }

    solicitar(cita) {
        this.citas.push(cita);
        cita.paciente = this;
    }

    cancelar(cita) {
        let posicion = this.citas.indexOf(cita);

        if (posicion !== -1) {
            this.citas.splice(posicion, 1);
            cita.cancelar();
        }
    }

    modificar(telefono, direccion, correo) {
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
    }
}

module.exports = Paciente;
