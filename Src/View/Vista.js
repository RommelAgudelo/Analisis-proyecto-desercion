// Funcionamiento de la pagina de inicio de sesion y los modales de error
document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.getElementById('btnLogin');
    const selectRol = document.getElementById('selectRol');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const modalMessageError = document.getElementById('modalMessageError');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const modal = new bootstrap.Modal(document.getElementById('noneDataModal'));

    btnLogin.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Validación de los campos
        if (selectRol.value === "") {
            showModal("Por favor, selecciona tu rol.");
        } else if (emailInput.value === "") {
            showModal("Por favor, ingresa tu correo electrónico.");
        } else if (passwordInput.value === "") {
            showModal("Por favor, ingresa tu contraseña.");
        } else {
            console.log("Formulario válido. Procesando datos...");
        }
    });

    // Función para mostrar el modal con el mensaje correspondiente
    function showModal(message) {
        modalMessageError.textContent = message;
        modalMessageError.style.color = "#39A900";
        modal.show();
    }

    // Al cerrar el modal, asegurarse de que el fondo vuelva a ser interactivo
    btnCloseModal.addEventListener('click', function () {
        modal.hide();
        document.body.classList.remove('modal-open');
        document.querySelector('.modal-backdrop').remove();
    });

});

// Logica de navegacion de la pagina
class Vista {
    constructor() {
        this.heading = document.getElementById('heading');
        this.subHeading = document.querySelector('#subHeading strong');
        this.btnReport = document.querySelector('#btnReport')
        this.dynamicContentContainer = document.getElementById('dynamicContentContainer');
    }

    actualizarContenido(titulo, subtitulo, contenido, templateId) {
        // Actualizar título y subtítulo
        this.heading.innerHTML = `<strong>${titulo}</span></strong>`;
        this.subHeading.textContent = subtitulo;

        // Limpiar y actualizar el contenido dinámico
        this.dynamicContentContainer.innerHTML = '';
        const template = document.getElementById(templateId);

        if (!template) {
            console.error(`Template con ID '${templateId}' no encontrado.`);
            return;
        }

        contenido.forEach(item => {
            const elemento = template.content.cloneNode(true);

            // Actualizar contenido del template dinámico según el templateId
            switch (templateId) {
                case 'dinamicCardCourse':
                    elemento.querySelector('strong').textContent = item.nombre;
                    break;
                case 'dinamicStudent':
                    elemento.querySelector('strong').textContent = item.titulo;
                    break;
                case 'dinamicCardNotification':
                    elemento.querySelector('strong').textContent = item.titulo;
                    elemento.querySelector('.text-body-secondary strong').textContent = `Enviada ${item.fecha}`;
                    break;
                case 'dinamicCardManual':
                    elemento.querySelector('strong').textContent = item.titulo;
                    break;
            }

            console.log({ titulo, subtitulo, contenido, templateId });

            // Insertar el template clonado en el contenedor dinámico
            this.dynamicContentContainer.appendChild(elemento);
        });
    }
}