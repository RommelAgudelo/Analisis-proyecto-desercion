class Vista {
    constructor() {
        this.titulo = document.getElementById('mi-titulo'); // Accedemos al elemento del DOM
    }

    actualizarEstilo(color, tamaño) {
        // Actualiza los estilos del elemento del título
        this.titulo.style.color = color;
        this.titulo.style.fontSize = tamaño;
    }
}

// Creamos una instancia de la vista
const vista = new Vista();