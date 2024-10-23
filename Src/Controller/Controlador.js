// controlador.js
class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        // Añadir listeners a los botones de navegación
        document.getElementById('btnCheckCourse').addEventListener('click', () => this.cambiarContenido('fichas'));
        document.getElementById('btnCheckNotifications').addEventListener('click', () => this.cambiarContenido('notificaciones'));
        document.getElementById('btnFollowUpPlan').addEventListener('click', () => this.cambiarContenido('seguimiento'));
        document.getElementById('btnMakeAssistance').addEventListener('click', () => this.cambiarContenido('asistencia'));
        document.getElementById('btnCheckStudents').addEventListener('click', () => this.cambiarContenido('aprendices'));
        document.getElementById('btnCheckHistory').addEventListener('click', () => this.cambiarContenido('historial'));
        document.getElementById('btnCheckReport').addEventListener('click', () => this.cambiarContenido('reporte'));
        document.getElementById('btnCheckUserManual').addEventListener('click', () => this.cambiarContenido('manual'));
    }

    cambiarContenido(tipo) {
        let titulo, subtitulo, contenido, templateId;
        const btnReporte = document.getElementById('btnReport');

        btnReporte.style.display = 'none';

        switch (tipo) {

            case 'fichas':
                titulo = 'Se encuentra visualizando sus <span style="color: #39A900;">fichas';
                subtitulo = 'Seleccione la ficha que desea ver:';
                contenido = this.modelo.obtenerFichas();
                templateId = 'dinamicCardCourse';
                break;

            case 'aprendices':
                titulo = 'Se encuentra visualizando su listado de  <span style="color: #39A900;">Aprendices';
                subtitulo = 'Seleccione el estudiante que desea ver:';
                contenido = this.modelo.obtenerEstudiantes();
                templateId = 'dinamicStudent';
                break;

            case 'notificaciones':
                titulo = 'Se encuentra visualizando sus <span style="color: #39A900;">notificaciones';
                subtitulo = 'Vea sus últimas notificaciones:';
                contenido = this.modelo.obtenerNotificaciones();
                templateId = 'dinamicCardNotification';
                break;

            case 'seguimiento':
                titulo = 'Se encuentra realizando un <span style="color: #39A900;">plan de seguimiento</span>';
                subtitulo = 'Seleccione la ficha a dar plan de seguimiento:';
                contenido = this.modelo.obtenerFichas();
                // btnReporte.style.display = 'block';
                templateId = 'dinamicCardCourse';
                break;

            case 'asistencia':
                titulo = 'Se encuentra visualizando su listado de <span style="color: #39A900;">aprendices';
                subtitulo = 'Seleccione la ficha a registrar asistencia:';
                contenido = this.modelo.obtenerFichas();
                templateId = 'dinamicCardCourse';
                break;

            case 'historial':
                titulo = 'Se encuentra registrando su <span style="color: #39A900;">asistencia';
                subtitulo = 'Seleccione la ficha a la cual ver historial asistencia:';
                contenido = this.modelo.obtenerFichas();
                templateId = 'dinamicCardCourse';
                break;

            case 'reporte':
                titulo = 'Se encuentra realizando un <span style="color: #39A900;">reporte asistencia';
                subtitulo = 'Seleccione la ficha a realizar reporte:';
                contenido = this.modelo.obtenerFichas();
                btnReporte.style.display = 'block';
                templateId = 'dinamicCardCourse';
                break;

            case 'manual':
                titulo = '¿Necesitas ayuda con la <span style="color: #39A900;">plataforma<span style="color: #00304D;">?';
                subtitulo = 'Seleccione el manual de usuario que deseas descargar:';
                contenido = this.modelo.obtenerManual();
                templateId = 'dinamicCardManual';
                break;
        }
        this.vista.actualizarContenido(titulo, subtitulo, contenido, templateId);
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const modelo = new Modelo();
    const vista = new Vista();
    const controlador = new Controlador(modelo, vista);
});