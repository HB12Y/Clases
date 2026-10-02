class Pedido {
    constructor(fecha, estado, precio) {
        this.fecha = fecha;
        this.estado = estado;
        this.total = 0;
        this.precio = precio;
        this.platos = [];
        this.cliente = null;
    }

    registrar() {
        console.log("Pedido registrado");
    }

    cancelar() {
        this.estado = "Cancelado";
    }

    calcularTotal() {
        this.total = this.precio;
        return this.total;
    }

    consultar() {
        console.log("Fecha:", this.fecha);
        console.log("Estado:", this.estado);
        console.log("Total:", this.calcularTotal());
        console.log("Platos:");

        this.platos.forEach((plato) => {
            console.log("-", plato.menu);
        });
    }

    agregarPlato(plato) {
        this.platos.push(plato);
        plato.agregarPedido(this);
    }
}

module.exports = Pedido;
