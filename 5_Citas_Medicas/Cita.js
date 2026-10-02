class Cita {
    constructor(fecha, hora, motivo, estado, lugar) {
        this.fecha = fecha;
        this.hora = hora;
        this.motivo = motivo;
        this.estado = estado;
        this.lugar = lugar;
        this.medico = null;
        this.paciente = null;
    }

    registrar() {
        console.log("Cita registrada");
    }

    cancelar() {
        this.estado = "Cancelada";
    }

    reprogramar(nuevaFecha, nuevaHora) {
        this.fecha = nuevaFecha;
        this.hora = nuevaHora;
        this.estado = "Reprogramada";
    }

    mostrar() {
        console.log("Fecha:", this.fecha);
        console.log("Hora:", this.hora);
        console.log("Motivo:", this.motivo);
        console.log("Estado:", this.estado);
        console.log("Lugar:", this.lugar);

        if (this.paciente) {
            console.log("Paciente:", this.paciente.nombre, this.paciente.apellido);
        }

        if (this.medico) {
            console.log("Medico:", this.medico.nombre, this.medico.apellido);
        }
    }
}

module.exports = Cita;
