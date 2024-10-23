// modelo.js
class Modelo {
    constructor() {
        this.fichas = [
            { id: 1, nombre: 'Ficha 2823217' },
            { id: 2, nombre: 'Ficha 2823218' }
        ];
        this.notificaciones = [
            { id: 1, titulo: 'Aprendiz en estado de riesgo', fecha: '7 de octubre del 2024, 13:00' },
            { id: 2, titulo: 'Nuevo documento subido', fecha: '6 de octubre del 2024, 10:30' }
        ];
        this.aprendices = [
            { id: 1, nombre: 'Jean Carlos Centeno' },
            { id: 2, nombre: 'María González' }
        ];
        this.manual = [
            { id: 1, titulo: '¿Cómo funciona la plataforma?' }
        ];
    }

    obtenerFichas() {
        this.fichas = [
            { id: 1, nombre: 'Ficha 2823217' },
            { id: 2, nombre: 'Ficha 2823218' }
        ];
        return this.fichas;
    }

    obtenerNotificaciones() {
        return this.notificaciones;
    }

    obtenerAprendices() {
        return this.aprendices;
    }

    obtenerManual() {
        return this.manual;
    }
}