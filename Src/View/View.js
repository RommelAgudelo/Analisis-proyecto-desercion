// Ejecutar initializeEventListeners cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initializeEventListeners);

// Código existente para el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const selectRol = document.getElementById('selectRol').value;
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

    let modalMessageError = '';

    // Validación de los campos
    if (!selectRol && !emailInput && !passwordInput) {
        modalMessageError = 'Por favor, rellena todos los campos.';
    } else if (!selectRol) {
        modalMessageError = 'Por favor, seleccione su tipo rol';
    } else if (!emailInput) {
        modalMessageError = 'Por favor, ingrese su correo electrónico';
    } else if (!passwordInput) {
        modalMessageError = 'Por favor, ingrese su contraseña';
    }

    // Mostrar el mensaje de error si hay uno
    if (modalMessageError) {
        document.getElementById('modalMessageError').innerHTML = `<strong style="color: #39A900;">${modalMessageError}</strong>`;

        // Crear una instancia del modal y mostrarlo
        var modal = new bootstrap.Modal(document.getElementById('noneDataModal'));
        modal.show();
    }
});

// vista.js
class Vista {
    constructor() {
        this.dynamicContentContainer = document.getElementById('dynamicContentContainer');
    }

    renderizarNotificaciones(notificaciones) {
        this.dynamicContentContainer.innerHTML = '';
        const template = document.getElementById('dinamicCardNotification');
        
        notificaciones.forEach(notificacion => {
            const notificationElement = template.content.cloneNode(true);
            notificationElement.querySelector('strong').textContent = notificacion.titulo;
            notificationElement.querySelector('.text-body-secondary').textContent = `Enviada ${notificacion.fecha}`;
            this.dynamicContentContainer.appendChild(notificationElement);
        });
    }
}