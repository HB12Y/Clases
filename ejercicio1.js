// Programacion orientada a objetos => clases
// Problema usuarios, productos, cita, pedidos
// 1. crear la clase

class Usuarios{
    //propiedades
    nombre
    apellido
    direccion
    telefono
    constructor(name, lastname, address, phone){
        //acceder a cada propiedad de la clase "THIS"
        this.nombre=name;
        this.apellido=lastname;
        this.direccion=address;
        this.telefono=phone;
    }
    verinformacion(){
        console.log("nombre en metodo"+ this.nombre)
    }
}
let luis = new Usuarios("Luis","Perez","123",123);

console.log(luis);
console.log(luis.nombre);
console.log(luis.apellido);
console.log(luis.direccion);
console.log(luis.telefono);
