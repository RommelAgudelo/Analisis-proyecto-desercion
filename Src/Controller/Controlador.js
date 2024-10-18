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
        let titulo, subtitulo, contenido, btnReporte, templateId;
        switch(tipo) {
            case 'fichas':
                titulo = 'Se encuentra visualizando sus <span style="color: #39A900;">fichas';
                subtitulo = 'Seleccione la ficha que desea ver:';
                contenido = this.modelo.obtenerFichas();
                templateId = 'dinamicCardCourse';
                break;
            case 'notificaciones':
                titulo = 'Se encuentra visualizando sus <span style="color: #39A900;">notificaciones';
                subtitulo = 'Vea sus últimas notificaciones:';
                contenido = this.modelo.obtenerNotificaciones();
                templateId = 'dinamicCardNotification';
                break;
            case 'seguimiento':
                titulo = 'Se encuentra realizando un <span style="color: #39A900;">plan de seguimiento';
                subtitulo = 'Seleccione la ficha para el plan de seguimiento:';
                contenido = this.modelo.obtenerFichas();
                btnReporte = 'btnReporte';
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