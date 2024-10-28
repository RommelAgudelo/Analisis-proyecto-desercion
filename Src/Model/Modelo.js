// Modelo.js

class Modelo {
    constructor() {
        this.vistasDisponibles = {
            fichas: {
                titulo: 'Visualización de <span style="color: #39A900;">Fichas</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione una ficha para ver más detalles:</strong>',
                template: "dinamicCardCourse",
                datos: [
                    { numero: "2823217" },
                    { numero: "2823218" }
                ]
            },
            notificaciones: {
                titulo: 'Centro de <span style="color: #39A900;">Notificaciones</span>',
                subtitulo: '<style= font-size:14.5px;>Revise sus notificaciones pendientes:</strong>',
                template: "dinamicCardNotification",
                datos: [
                    { titulo: "Aprendiz en estado de riesgo", fecha: "7 de octubre del 2024, 13:00" }
                ]
            },
            seguimiento: {
                titulo: 'Plan de <span style="color: #39A900;">Seguimiento</span>',
                subtitulo: '<style= font-size:14.5px;>Lista de aprendices en seguimiento:</strong>',
                template: "dinamicStudent",
                datos: [
                    { nombre: "Jean Carlos Centeno" }
                ]
            },
            ayuda: {
                titulo: 'Centro de <span style="color: #39A900;">Ayuda</span>',
                subtitulo: '<style= font-size:14.5px;>Recursos disponibles para su consulta:</strong>',
                template: "dinamicCardManual",
                datos: [
                    { titulo: "¿Cómo funciona la plataforma?" }
                ]
            }
        };
    }

    obtenerConfiguracionVista(tipoVista) {
        return this.vistasDisponibles[tipoVista];
    }
}