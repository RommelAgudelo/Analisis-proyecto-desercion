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

// Código existente para la descarga del manual de usuario
document.getElementById('btnUploadFile').addEventListener('click', function() {
    downloadFile();
});

function downloadFile() {
    const link = document.createElement('a');
    link.href = '../Resources/Documents/UserManual.pdf';
    link.download = 'UserManual.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Nuevo código para el cambio dinámico de contenido
const optionContent = {
    visualizarFichas: {
        title: "Te encuentras visualizando tu listado de <span style='color: #39A900;'>fichas</span>:",
        subtitle: "Selecciona la ficha que deseas visualizar:",
        content: `
            <div class="d-flex align-items-center mb-2" id="contentCard" style="width: 100%; max-width: 1100px;">
                <img src="../Resources/Img/FolderIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
                <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Ficha 2823217</strong>
                <div class="flex-grow-1"></div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#optionModal" id="moreOptionBtn">
                    <strong>Ver opciones</strong>
                </button>
            </div>
        `
    },
    verNotificaciones: {
        title: "Te encuentras visualizando tus <span style='color: #39A900;'>notificaciones</span>:",
        subtitle: "Aquí puedes ver tus notificaciones pendientes:",
        content: `
            <div class="d-flex align-items-center mb-2" id="contentCard" style="width: 100%; max-width: 1100px;">
                <img src="../Resources/Img/NotificationIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
                <div class="text-left">
                    <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Aprendiz en estado de riesgo</strong>
                    <p class="card-text"><small class="text-body-secondary" style="font-size: 20px; margin-left: 2vh;"><strong>Enviada 7 de octubre del 2024, 13:00</strong></small></p>
                </div>
                <div class="flex-grow-1"></div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#notificationModal" id="moreOptionBtn">
                    <strong>Ver notificación</strong>
                </button>
            </div>
        `
    },
    planSeguimiento: {
        title: "Te encuentras visualizando el <span style='color: #39A900;'>plan de seguimiento</span>:",
        subtitle: "Aquí puedes ver el plan de seguimiento de tus aprendices:",
        content: `
            <div class="d-flex align-items-center mb-2" id="contentCard" style="width: 100%; max-width: 1100px;">
                <img src="../Resources/Img/UserIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
                <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">Jean Carlos Centeno</strong>
                <div class="flex-grow-1"></div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#asistModal" id="moreOptionBtn">
                    <strong>Ver historial</strong>
                </button>
            </div>
        `
    },
    ayuda: {
        title: "¿Necesitas <span style='color: #39A900;'>ayuda</span>?",
        subtitle: "Aquí puedes encontrar información sobre cómo usar la plataforma:",
        content: `
            <div class="d-flex align-items-center mb-2" id="contentCard" style="width: 100%; max-width: 1100px;">
                <img src="../Resources/Img/QuestionIcon.png" alt="Imagen 1" class="imagen-sub-div" id="iconImg">
                <strong style="color: #00304D; font-size: 30px; margin-left: 2vh;">¿Cómo funciona la plataforma?</strong>
                <div class="flex-grow-1"></div>
                <button type="button" class="btn btn-primary" id="btnUploadFile">
                    <strong>Ver manual</strong>
                </button>
            </div>
        `
    }
};

function updateContent(option) {
    const content = optionContent[option];
    document.querySelector('#spaceWork h1.card-title').innerHTML = content.title;
    document.querySelector('#spaceWork strong.d-flex.justify-content-start').textContent = content.subtitle;
    document.querySelector('#dynamicContentContainer').innerHTML = content.content;
}

function initializeEventListeners() {
    document.getElementById('btnCheckCourse').addEventListener('click', () => updateContent('visualizarFichas'));
    document.getElementById('btnCheckNotifications').addEventListener('click', () => updateContent('verNotificaciones'));
    document.querySelector('btnFollowUpPlan').addEventListener('click', () => updateContent('planSeguimiento'));
    document.getElementById('btnCheckUserManual').addEventListener('click', () => updateContent('ayuda'));
}
