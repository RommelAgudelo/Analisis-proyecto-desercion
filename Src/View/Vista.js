// vista.js

// Logica de navegacion de la pagina

class Vista {
    constructor() {
        this.optionMenu = document.getElementById('optionMenu');
        this.title = document.getElementById('title');
        this.subTitle = document.getElementById('subTitle');
        this.dynamicContentContainer = document.getElementById('dynamicContentContainer');
    }

    renderizarMenuLateral() {
        this.optionMenu.innerHTML = `
          <div class="card p-2" id="optionMenu">
            <div class="d-flex justify-content-center">
              <a href="#" onclick="location.reload();">
                <img src="../Resources/Img/SenaLogo.png" alt="" id="SenaLogo">
              </a>
            </div>
            <form>
              <div class="search-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" id="searchBar">
              </div>
            </form>
            <div class="d-flex align-content-stretch flex-wrap" id="btnNavegation">
              <div id="btnNavegationMenu">
                <button class="btnNavegation" type="button" a href="..." id="btnCheckCourse"><strong>Vizualizar fichas</strong></button>
                <button class="btnNavegation" type="button" a href="..." id="btnCheckNotifications"><strong>Ver notificaciones</strong></button>
                <button class="btnNavegation" type="button" a href="..." id="btnFollowUpPlan"><strong>Plan seguimiento</strong></button>
                <button class="btnNavegation" type="button" a href="..." id="btnCheckUserManual"><strong>¿Necesitas ayuda?</strong></button>
              </div>
            </div>
          </div>
        `;
    }

    renderizarMenuLateralAlternativo() {
        this.optionMenu.innerHTML = `
          <div class="card p-2" id="optionMenu">
            <div class="d-flex justify-content-center">
              <a href="#" onclick="location.reload();">
                <img src="../Resources/Img/SenaLogo.png" alt="" id="SenaLogo">
              </a>
            </div>
            <div class="d-flex align-content-stretch flex-wrap" id="btnNavegation">
              <div id="btnNavegationMenu">
                <button class="btn btn-primary mb-2" type="button" a href="..." id="btnMakeAssistance">
                  <strong>Registrar asistencia</strong>
                </button>
                <button class="btn btn-primary mb-2" type="button" a href="..." id="btnCheckHistory">
                  <strong>Historial de asistencia</strong>
                </button>
                <button class="btn btn-primary mb-2" type="button" a href="..." id="btnMakeReport">
                  <strong>Generar reporte</strong>
                </button>
                <button class="btn btn-primary" type="button" a href="..." id="btnCheckUserManual">
                  <strong>¿Necesitas ayuda?</strong>
                </button>
              </div>
            </div>
          </div>
        `;
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

    renderizarmarcarAsistenciaFicha(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardCourse" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/FolderIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Ficha ${dato.numero}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#asistModal" id="moreOptionBtn">
                <strong>Registrar asistencia</strong>
            </button>
        </div>`;
    }

    renderizarhistorialFicha(dato) {
        console.log('Renderizando historial ficha:', dato);
        return `
            <div class="d-flex align-items-center mb-2" id="contentCardCourseHistory" style="width: 100%; max-width: 1100px;">
                <img src="../Resources/Img/FolderIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
                <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Ficha ${dato.numero}</strong>
                <div class="flex-grow-1"></div>
                <button type="button" class="btn btn-primary" id="btnSelectHistory">
                    <strong>Seleccionar</strong>
                </button>
            </div>`;
    }

    renderizarhistorialAprendiz(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardStudent" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/UserIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">${dato.nombre}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#historyAsistModal" id="moreOptionBtn">
                <strong>Ver historial</strong>
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

    renderizarReporte(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardCourse" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/FolderIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Ficha ${dato.numero}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#optionModal" id="moreOptionBtn">
                <strong>Generar reporte</strong>
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

        // Limpiar el contenedor

        this.dynamicContentContainer.innerHTML = '';

        let contenidoHTML = '';

        // Casos para cada template
        datos.forEach(dato => {
            switch (templateId) {
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
                case 'dinamicCardCourseAssistance':
                    contenidoHTML += this.renderizarmarcarAsistenciaFicha(dato);
                    break;
                case 'dinamicCardCourseHistory':
                    contenidoHTML += this.renderizarhistorialFicha(dato);
                    break;
                case 'dinamicCardStudentHistory':
                    contenidoHTML += this.renderizarhistorialFicha(dato);
                    break;
                default:
                    console.log('Template no encontrado:', templateId);
                    break;
            }
        });

        // Insertamos todo el contenido de una vez
        this.dynamicContentContainer.innerHTML = contenidoHTML;
    }
}

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.getElementById('btnLogin');
    const selectRol = document.getElementById('selectRol');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const modalMessageError = document.getElementById('modalMessageError');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const modalElement = document.getElementById('noneDataModal');

    // Instancia del modal de Bootstrap
    const modal = new bootstrap.Modal(modalElement);

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
        modal.show(); // Muestra el modal
    }

    // Cerrar el modal al hacer clic en el botón de cierre
    btnCloseModal.addEventListener('click', function () {
        modal.hide(); // Oculta el modal
    });
});