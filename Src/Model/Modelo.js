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
            marcarAsistenciaFicha: {
                titulo: 'Centro de <span style="color: #39A900;">Asistencia</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione una ficha para marcar asistencia:</strong>',
                template: "dinamicCardCourseAssistance",
                datos: [
                    { numero: "2823217" },
                    { numero: "2823218" }
                ]
            },
            historialFicha: {
                titulo: 'Centro de <span style="color: #39A900;">Historial</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione una ficha para ver historial:</strong>',
                template: "dinamicCardCourseHistory",
                datos: [
                    { numero: "2823217" },
                    { numero: "2823218" }
                ]
            },
            historialAprendiz: {
                titulo: 'Centro de <span style="color: #39A900;">Historial</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione una estudiante para ver su historial de asistencias :</strong>',
                template: "dinamicCardStudentHistory",
                datos: [
                    { numero: "2823217" },
                    { numero: "2823218" }
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
            reporte: {
                titulo: 'Centro de <span style="color: #39A900;">Reporte</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione una ficha para generar reporte:</strong>',
                template: "dinamicCardCourse",
                datos: [
                    { numero: "2823217" },
                    { numero: "2823218" }
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