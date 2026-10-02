const Medico = require("./Medico");
const Paciente = require("./Paciente");
const Cita = require("./Cita");

let medico1 = new Medico("Carlos", "Gomez", "Cardiologia");
let paciente1 = new Paciente(
    "Daniel",
    "Perez",
    "3001234567",
    "Carrera 5 # 10-20",
    "daniel@gmail.com"
);

let cita1 = new Cita(
    "03/10/2026",
    "9:00 AM",
    "Dolor en el pecho",
    "Programada",
    "Consultorio 2"
);

medico1.registrar();
paciente1.consultar();

medico1.asignarCita(cita1);
paciente1.solicitar(cita1);
cita1.registrar();

console.log("--------------------");
cita1.mostrar();
