//Cree a clase bancos con las propiedades nombre,direccion,telefono cree
//clase cuenta bancaria con propiedades como propietario y monto para 
//cree el metodo informacion donde se puedan ver cada uno de los pertenecientes a la clase 
// Clase Banco
class Banco {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
 
  // Método para mostrar información del banco
  informacion() {
    console.log("=== INFORMACIÓN DEL BANCO ===");
    console.log(`Nombre: {this.nombre}`);
    console.log(`Dirección: {this.direccion}`);
    console.log(`Teléfono: {this.telefono}`);
    console.log("============================\n");
  }
}
 
// Clase CuentaBancaria
class CuentaBancaria {
  constructor(propietario, monto) {
    this.propietario = propietario;
    this.monto = monto;
  }
 
  // Método para mostrar información de la cuenta
  informacion() {
    console.log("=== INFORMACIÓN DE LA CUENTA ===");
    console.log(`Propietario: ${this.propietario}`);
    console.log(`Monto: $${this.monto.toFixed(2)}`);
    console.log("================================\n");
  }
}
 
// ========== EJEMPLOS DE USO ==========
 
// Crear instancia de un banco
const bancoPrincipal = new Banco(
  "Banco Nacional",
  "Calle Principal 123, Popayán",
  "+57 2 8394567"
);