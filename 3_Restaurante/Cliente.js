class Cliente {
    constructor(nombre, apellido, direccion, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.pedidos = [];
    }

    verPedidos() {
        console.log("Pedidos de", this.nombre, this.apellido);
        this.pedidos.forEach((pedido) => {
            pedido.consultar();
        });
    }

    realizarPedido(pedido) {
        this.pedidos.push(pedido);
        pedido.cliente = this;
    }

    asignarPedido(pedido) {
        this.realizarPedido(pedido);
    }
}

module.exports = Cliente;
