const Cliente = require("./Cliente");
const Entrenador = require("./Entrenador");
const Rutina = require("./Rutina");

let cliente1 = new Cliente("Juan", "Lopez", "Carrera 6 # 8-20");
let entrenador1 = new Entrenador("Andres", "Gomez", "Calle 4 # 10-15", "Musculacion");

let rutina1 = new Rutina("Pierna", "Trabajar piernas", "60 minutos");
let rutina2 = new Rutina("Brazos", "Fortalecer brazos", "45 minutos");

cliente1.asignarRutina(rutina1);
cliente1.asignarRutina(rutina2);

entrenador1.asignarRutina(rutina1);
entrenador1.asignarRutina(rutina2);

entrenador1.registrar();
cliente1.verRutina();
console.log("--------------------");
cliente1.verEntrenador();
