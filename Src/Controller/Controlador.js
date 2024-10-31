// controlador.js

class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.inicializarEventos();
    }

    inicializarEventos() {
        // Eventos de los botones

        // Pagina de fichas
        document.getElementById('btnCheckCourse').addEventListener('click', () => 
            this.cambiarVista('fichas'));
        
        // Pagina de notificaciones
        document.getElementById('btnCheckNotifications').addEventListener('click', () => 
            this.cambiarVista('notificaciones'));
        
        // Pagina de seguimiento
        document.getElementById('btnFollowUpPlan').addEventListener('click', () => 
            this.cambiarVista('seguimiento'));
        
        // Pagina de manual de usuario
        document.getElementById('btnCheckUserManual').addEventListener('click', () => 
            this.cambiarVista('ayuda'));

        // Pagina de marcar asistencia fichas
        document.getElementById('btnMakeAssistance').addEventListener('click', () =>
            this.cambiarVista('marcarAsistenciaFicha'));

        // Pagina de ver asistencia fichas
        document.getElementById('btnCheckHistory').addEventListener('click', () => 
            this.cambiarVista('historialFicha'));

        // Pagina de ver asistencia estudiantes
        document.getElementById('btnSelectHistory').addEventListener('click', () => 
            this.cambiarVista('historialAprendiz'));

        // Pagina de hacer reporte
        document.getElementById('btnMakeReport').addEventListener('click', () => 
            this.cambiarVista('reporte'));
        
    }

    cambiarVista(tipoVista) {
        const configuracion = this.modelo.obtenerConfiguracionVista(tipoVista);
        
        if (configuracion) {
            this.vista.actualizarTitulo(configuracion.titulo);
            this.vista.actualizarSubtitulo(configuracion.subtitulo);
            this.vista.cargarTemplate(configuracion.template, configuracion.datos);
        }
    }
}