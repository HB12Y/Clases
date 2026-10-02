const Vehiculo = require("./Vehiculo");
const Cliente = require("./Cliente");
const Alquiler = require("./Alquiler");

let vehiculo1 = new Vehiculo("ABC123", "Toyota", "Corolla", "Automovil");
let vehiculo2 = new Vehiculo("XYZ789", "Renault", "Duster", "Camioneta");

let cliente1 = new Cliente("Pedro", "1020304050", "3009998877");

let alquiler1 = new Alquiler("02/10/2026", "05/10/2026", cliente1, vehiculo1);
let alquiler2 = new Alquiler("10/10/2026", "12/10/2026", cliente1, vehiculo2);

cliente1.realizarAlquiler(alquiler1);
cliente1.realizarAlquiler(alquiler2);

vehiculo1.mostrar();
console.log("--------------------");
cliente1.mostrarAlquileres();
