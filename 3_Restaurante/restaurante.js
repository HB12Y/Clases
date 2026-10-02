const Cliente = require("./Cliente");
const Plato = require("./Plato");
const Pedido = require("./Pedido");

let cliente1 = new Cliente("Laura", "Perez", "Calle 5 # 12-30", "3012223344");

let plato1 = new Plato("Hamburguesa especial", "Hamburguesa con queso", "Comida rapida");
let plato2 = new Plato("Papas fritas", "Papas con salsa", "Acompañamiento");

let pedido1 = new Pedido("02/10/2026", "En preparacion", 25000);

pedido1.agregarPlato(plato1);
pedido1.agregarPlato(plato2);
cliente1.realizarPedido(pedido1);

plato1.registrar();
pedido1.registrar();
console.log("--------------------");
cliente1.verPedidos();
