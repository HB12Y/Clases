class Libro {
    constructor(titulo, autor, genero, anioPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anioPublicacion = anioPublicacion;
    }

    mostrar() {
        console.log("Titulo:", this.titulo);
        console.log("Autor:", this.autor);
        console.log("Genero:", this.genero);
        console.log("Año de publicacion:", this.anioPublicacion);
    }
}

module.exports = Libro;
