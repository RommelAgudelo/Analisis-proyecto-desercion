//Vista.js

// Logica de navegacion de la pagina

class Vista {
    constructor() {
        this.optionMenu = document.getElementById('optionMenu');
        this.title = document.getElementById('title');
        this.subTitle = document.getElementById('subTitle');
        this.dynamicContentContainer = document.getElementById('dynamicContentContainer');
        this.ultimoTemplateUsado = null;
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

    renderizarmarcarAsistenciaFicha(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardCourse" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/FolderIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Ficha ${dato.numero}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" id="btnSelectAttendance">
                <strong>Seleccionar</strong>
            </button>
        </div>`;
    }

    renderizarmarcarAsistenciaEstudiante(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardStudent" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/UserIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">${dato.nombre}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#asistModal" id="btnMakeAttendance">
                <strong>Registre asistencia</strong>
            </button>
        </div>`;
    }

    renderizarhistorialFicha(dato) {
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
        <div class="d-flex align-items-center mb-2" id="contentCardStudentHistory" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/UserIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">${dato.nombre}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#historyAsistModal" id="moreOptionBtn">
                <strong>Ver historial</strong>
            </button>
        </div>`;
    }

    renderizargenerareporte(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardGenerateReport" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/FolderIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Ficha ${dato.numero}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" id="btnSelectReport">
                <strong>Seleccionar</strong>
            </button>
        </div>`;
    }

    renderizargenerareporteestudiante(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardGenerateReportStudent" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/UserIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">${dato.nombre}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reportModal" id="btnGenerateReport">
                <strong>Generar reporte</strong>
            </button>
        </div>`;
    }

    renderizarseguimientoficha(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardCourseTracking" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/FolderIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Ficha ${dato.numero}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#seguimientoModal" id="btnSeguimientoFicha">
                <strong>Ver plan de seguimiento</strong>
            </button>
        </div>`;
    }

    renderizarseguimientoEstudiante(dato) {
        return `
        <div class="d-flex align-items-center mb-2" id="contentCardStudentTracking" style="width: 100%; max-width: 1100px;">
            <img src="../Resources/Img/UserIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
            <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">${dato.nombre}</strong>
            <div class="flex-grow-1"></div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#seguimientoModal" id="btnSeguimientoEstudiante">
                <strong>Ver plan de seguimiento</strong>
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#notificationModal" id="btnNotification" 
                data-titulo="${dato.titulo}" 
                data-fecha="${dato.fecha}" 
                data-contenido="${dato.contenido}">
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
            <button type="button" class="btn btn-primary" id="btnManualDownload">
                <strong>Descarga manual</strong>
            </button>
        </div>`;
    }

    cargarTemplate(templateId, datos) {

        // Guardar el último template usado
        this.ultimoTemplateUsado = templateId;

        // Limpiar el contenedor

        this.dynamicContentContainer.innerHTML = '';

        // Si no hay datos parecidos, mostrar mensaje
        if (!datos || datos.length === 0) {
            this.dynamicContentContainer.innerHTML = `
                <div class="d-flex align-items-center mb-2" style="width: 100%; max-width: 1100px;">
                    <strong style="color: #00304D; font-size: 20px;">No se encontraron resultados</strong>
                </div>`;
            return;
        }

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
                case 'dinamicCardStudent':
                    contenidoHTML += this.renderizarmarcarAsistenciaEstudiante(dato);
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
                case 'dinamicCardGenerateReport':
                    contenidoHTML += this.renderizargenerareporte(dato);
                    break;
                case 'dinamicCardStudentHistory':
                    contenidoHTML += this.renderizarhistorialAprendiz(dato);
                    break;
                case 'dinamicCardGenerateReportStudent':
                    contenidoHTML += this.renderizargenerareporteestudiante(dato);
                    break;
                case 'dinamicCardCourseTracking':
                    contenidoHTML += this.renderizarseguimientoficha(dato);
                    break;
                case 'dinamicCardStudentTracking':
                    contenidoHTML += this.renderizarseguimientoEstudiante(dato);
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

// Hacer DOM esté completamente cargado
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