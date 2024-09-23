class Modelo {
    constructor() {
        this.color = 'blue'; // Color inicial
        this.tamaño = '20px'; // Tamaño inicial
    }

    cambiarEstilo() {
        // Cambia el color y tamaño de manera alternada
        this.color = this.color === 'blue' ? 'red' : 'blue';
        this.tamaño = this.tamaño === '20px' ? '30px' : '20px';
    }
}