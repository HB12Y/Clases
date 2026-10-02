class Alquiler {
    constructor(fechaInicio, fechaFinalizacion, cliente, vehiculo) {
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
        this.cliente = cliente;
        this.vehiculo = vehiculo;
    }

    mostrar() {
        console.log("Fecha de inicio:", this.fechaInicio);
        console.log("Fecha de finalizacion:", this.fechaFinalizacion);
        console.log("Cliente:", this.cliente.nombre);
        console.log("Vehiculo:", this.vehiculo.marca, this.vehiculo.modelo);
        console.log("Placa:", this.vehiculo.placa);
    }
}

module.exports = Alquiler;
