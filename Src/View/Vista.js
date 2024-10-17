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
        this.heading = document.getElementById('heading');
        this.subHeading = document.querySelector('#subHeading strong');
        this.dynamicContentContainer = document.getElementById('dynamicContentContainer');
    }

    actualizarContenido(titulo, subtitulo, contenido, templateId) {
        // Actualizar título y subtítulo
        this.heading.innerHTML = `<strong>Te encuentras visualizando tu listado de <span style="color: #39A900;">${titulo}</span>:</strong>`;
        this.subHeading.textContent = subtitulo;

        // Limpiar y actualizar el contenido dinámico
        this.dynamicContentContainer.innerHTML = '';
        const template = document.getElementById(templateId);
        
        contenido.forEach(item => {
            const elemento = template.content.cloneNode(true);
            switch(templateId) {
                case 'dinamicCardCourse':
                    elemento.querySelector('strong').textContent = item.nombre;
                    break;
                case 'dinamicCardNotification':
                    elemento.querySelector('strong').textContent = item.titulo;
                    elemento.querySelector('.text-body-secondary strong').textContent = `Enviada ${item.fecha}`;
                    break;
                case 'dinamicCardCourse':
                    elemento.querySelector('strong').textContent = item.nombre;
                    break;
                case 'dinamicCardManual':
                    elemento.querySelector('strong').textContent = item.titulo;
                    break;
            }
            this.dynamicContentContainer.appendChild(elemento);
        });
    }
}
