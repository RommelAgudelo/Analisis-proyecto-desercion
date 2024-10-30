// controlador.js

class Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.inicializarEventos();
    }

    inicializarEventos() {
        // Eventos de los botones
        document.getElementById('btnCheckCourse').addEventListener('click', () => 
            this.cambiarVista('fichas'));
        
        document.getElementById('btnCheckNotifications').addEventListener('click', () => 
            this.cambiarVista('notificaciones'));
        
        document.getElementById('btnFollowUpPlan').addEventListener('click', () => 
            this.cambiarVista('seguimiento'));
        
        document.getElementById('btnCheckUserManual').addEventListener('click', () => 
            this.cambiarVista('ayuda'));

        document.getElementById('btnMakeAssistance').addEventListener('click', () => 
            this.cambiarVista('asistencia'));

        document.getElementById('btnMakeReport').addEventListener('click', () => 
            this.cambiarVista('seguimiento'));

        document.getElementById('btnCheckHistory').addEventListener('click', () => 
            this.cambiarVista('fichas'));
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