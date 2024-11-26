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
                    { 
                        titulo: "Aprendiz en estado de riesgo", 
                        fecha: "7 de octubre del 2024, 13:00",
                        contenido: "El estudiante Juan Pérez presenta inasistencias recurrentes y bajo rendimiento académico. Se recomienda una intervención inmediata del equipo de bienestar."
                    },
                    { 
                        titulo: "Seguimiento académico", 
                        fecha: "5 de octubre del 2024, 10:30",
                        contenido: "María Gómez ha mostrado una mejora significativa en sus últimas evaluaciones. Se sugiere mantener el plan de apoyo actual."
                    },
                    { 
                        titulo: "Alerta de deserción", 
                        fecha: "3 de octubre del 2024, 14:45",
                        contenido: "Pedro Rodríguez ha manifestado dificultades personales que podrían afectar su permanencia en el programa. Es necesario programar una reunión de acompañamiento."
                    }
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
            marcarAsistenciaEstudiante: {
                titulo: 'Centro de <span style="color: #39A900;">Asistencia</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione un estudiante para registrar asistencia:</strong>',
                template: "dinamicCardStudent",
                datos: [
                    { nombre: "Juan Pérez", ficha: "2823217" },
                    { nombre: "María Gómez", ficha: "2823217" },
                    { nombre: "Pedro Rodríguez", ficha: "2823218" }
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
                subtitulo: '<style= font-size:14.5px;>Seleccione un estudiante para ver su historial:</strong>',
                template: "dinamicCardStudentHistory", // Cambia esto
                datos: [
                    { nombre: "Juan Pérez", ficha: "2823217" },
                    { nombre: "María Gómez", ficha: "2823217" },
                    { nombre: "Pedro Rodríguez", ficha: "2823218" }
                ]
            },
            generareporte: {
                titulo: 'Centro de <span style="color: #39A900;">Generar reporte</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione una ficha para generar reporte:</strong>',
                template: "dinamicCardGenerateReport",
                datos: [
                    { numero: "2823217" },
                    { numero: "2823218" }
                ]
            },
            generareporteestudiante: {
                titulo: 'Centro de <span style="color: #39A900;">Generar reporte</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione un estudiante para generar reporte:</strong>',
                template: "dinamicCardGenerateReportStudent", // Asegúrate que este template exista
                datos: [
                    { nombre: "Juan Pérez", ficha: "2823217" },
                    { nombre: "María Gómez", ficha: "2823217" },
                    { nombre: "Pedro Rodríguez", ficha: "2823218" }
                ]
            },
            seguimientoficha: {
                titulo: 'Centro de <span style="color: #39A900;">Seguimiento</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione una ficha para hacer seguimiento:</strong>',
                template: "dinamicCardCourseTracking",
                datos: [
                    { numero: "2823217" },
                    { numero: "2823218" }
                ]
            },
            seguimientoestudiante: {
                titulo: 'Centro de <span style="color: #39A900;">Seguimiento</span>',
                subtitulo: '<style= font-size:14.5px;>Seleccione un estudiante para hacer seguimiento:</strong>',
                template: "dinamicCardStudentTracking",
                datos: [
                    { nombre: "Juan Pérez", ficha: "2823217" },
                    { nombre: "María Gómez", ficha: "2823217" },
                    { nombre: "Pedro Rodríguez", ficha: "2823218" }
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