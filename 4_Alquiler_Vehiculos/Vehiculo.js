class Vehiculo {
    constructor(placa, marca, modelo, tipo) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
    }

    mostrar() {
        console.log("Placa:", this.placa);
        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("Tipo:", this.tipo);
    }
}

module.exports = Vehiculo;
