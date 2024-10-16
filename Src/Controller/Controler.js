// controlador.js
document.addEventListener('DOMContentLoaded', function() {
    const modelo = new Modelo();
    const vista = new Vista();
    const btnCheckCourse = document.getElementById('btnCheckCourse');
    const btnNotifications = document.getElementById('btnNotifications');
    const btnFollowUpPlan = document.getElementById('btnReport');
    const btnReport = document.getElementById('btnReport');

    btnNotifications.addEventListener('click', function() {
        document.querySelector('.card-title').innerHTML = '<strong>Te encuentras visualizando tus <span style="color: #39A900;">notificaciones</span>:</strong>';
        const notificaciones = modelo.obtenerNotificaciones();
        vista.renderizarNotificaciones(notificaciones);
    });

    btnReport.addEventListener('click', function() {
        document.querySelector('.card-title').innerHTML = '<strong>Te encuentras visualizando tu listado de <span style="color: #39A900;">fichas</span>:</strong>';
        // Aquí puedes agregar la lógica para mostrar el reporte o las fichas originales
    });
});