class Plato {
    constructor(menu, descripcion, categoria) {
        this.menu = menu;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.pedidos = [];
    }

    registrar() {
        console.log("Plato registrado:", this.menu);
    }

    actualizar(nuevaDescripcion, nuevaCategoria) {
        this.descripcion = nuevaDescripcion;
        this.categoria = nuevaCategoria;
    }

    consultar() {
        console.log("Menu:", this.menu);
        console.log("Descripcion:", this.descripcion);
        console.log("Categoria:", this.categoria);
    }

    agregarPedido(pedido) {
        this.pedidos.push(pedido);
    }
}

module.exports = Plato;
