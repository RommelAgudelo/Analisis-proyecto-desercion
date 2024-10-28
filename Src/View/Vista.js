// vista.js

// Logica de navegacion de la pagina

class Vista {
    constructor() {
        this.title = document.getElementById('title');
        this.subTitle = document.getElementById('subTitle');
        this.dynamicContentContainer = document.getElementById('dynamicContentContainer');
    }

    actualizarTitulo(texto) {
        this.title.innerHTML = `<strong style="color: #00304D;">${texto}</strong>`;
    }

    actualizarSubtitulo(texto) {
        this.subTitle.innerHTML = `
            <div style="width: 90%; margin: 0 auto;">
                <div class="d-flex flex-column align-items-center" style="width: 100%;">
                    <div class="d-flex justify-content-center align-items-center"
                        style="color:#00304D; font-size: 14.5px;">
                        <strong>${texto}</strong>
                    </div>
                    <div class="linea-horizontal"
                        style="width: 100%; height: 2px; background-color: #00304D; margin-top: 10px;">
                    </div>
                </div>
            </div>`;
    }

    renderizarFicha(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardCourse" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/FolderIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Ficha ${dato.numero}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#optionModal" id="moreOptionBtn">
                <strong>Ver opciones</strong>
            </button>
        </div>`;
    }

    renderizarNotificacion(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardNotificatión" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/NotificationIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <div class="text-left">
                <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">${dato.titulo}</strong>
                <p class="card-text"><small class="text-body-secondary" style="font-size: 20px; margin-left: 2vh;"><strong>Enviada ${dato.fecha}</strong></small></p>
            </div>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#notificationModal" id="moreOptionBtn">
                <strong>Ver notificación</strong>
            </button>
        </div>`;
    }

    renderizarEstudiante(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardStudent" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/UserIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">${dato.nombre}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#asistModal" id="moreOptionBtn">
                <strong>Ver historial</strong>
            </button>
        </div>`;
    }

    renderizarManual(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardManual" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/QuestionIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">${dato.titulo}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" id="moreOptionBtn">
                <strong>Descarga manual</strong>
            </button>
        </div>`;
    }

    cargarTemplate(templateId, datos) {
        // Limpiamos el contenedor
        this.dynamicContentContainer.innerHTML = '';
        
        let contenidoHTML = '';
        
        // Dependiendo del template, usamos el renderizador correspondiente
        datos.forEach(dato => {
            switch(templateId) {
                case 'dinamicCardCourse':
                    contenidoHTML += this.renderizarFicha(dato);
                    break;
                case 'dinamicCardNotification':
                    contenidoHTML += this.renderizarNotificacion(dato);
                    break;
                case 'dinamicStudent':
                    contenidoHTML += this.renderizarEstudiante(dato);
                    break;
                case 'dinamicCardManual':
                    contenidoHTML += this.renderizarManual(dato);
                    break;
            }
        });
        
        // Insertamos todo el contenido de una vez
        this.dynamicContentContainer.innerHTML = contenidoHTML;
    }
}

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