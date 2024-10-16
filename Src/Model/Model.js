// modelo.js
class Model {
    constructor() {
        this.notificaciones = [
            { titulo: 'Aprendiz en estado de riesgo', fecha: '7 de octubre del 2024, 13:00' },
            { titulo: 'Nuevo documento subido', fecha: '6 de octubre del 2024, 10:30' }
        ];
    }

    obtenerNotificaciones() {
        return this.notificaciones;
    }
}