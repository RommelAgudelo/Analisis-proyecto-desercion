// controlador.js
class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        // Añadir listeners a los botones de navegación
        document.getElementById('btnCheckCourse').addEventListener('click', () => this.cambiarContenido('fichas'));
        document.getElementById('btnCheckNotifications').addEventListener('click', () => this.cambiarContenido('notificaciones'));
        document.getElementById('btnFollowUpPlan').addEventListener('click', () => this.cambiarContenido('seguimiento'));
        document.getElementById('btnCheckUserManual').addEventListener('click', () => this.cambiarContenido('manual'));
    }

    cambiarContenido(tipo) {
        let titulo, subtitulo, contenido, templateId;
        switch(tipo) {
            case 'fichas':
                titulo = 'Se encuentra visualizando sus fichas';
                subtitulo = 'Selecciona la ficha que deseas visualizar:';
                contenido = this.modelo.obtenerFichas();
                templateId = 'dinamicCardCourse';
                break;
            case 'notificaciones':
                titulo = 'Se encuentra visualizando sus notificaciones';
                subtitulo = 'Últimas notificaciones recibidas:';
                contenido = this.modelo.obtenerNotificaciones();
                templateId = 'dinamicCardNotification';
                break;
            case 'seguimiento':
                titulo = 'Se encuentra realizando un plan de seguimiento';
                subtitulo = 'Seleccione una ficha para seguir con el plan de seguimiento:';
                contenido = this.modelo.obtenerFichas();
                templateId = 'dinamicCardCourse';
                break;
            case 'manual':
                titulo = '¿Necesitas ayuda con la plataforma?';
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