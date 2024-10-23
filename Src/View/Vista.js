// Funcionamiento de la pagina de inicio de sesion y los modales de error
document.addEventListener("DOMContentLoaded", function () {
    // Variables de nuestro cuardro de login
    const btnLogin = document.getElementById('btnLogin');
    const selectRol = document.getElementById('selectRol');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const modalMessageError = document.getElementById('modalMessageError');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const modal = new bootstrap.Modal(document.getElementById('noneDataModal'));

    //-----------------------------------------------------------------------------------------------//

    // Listeners una vez se preciona el boton de iniciar sesión 
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

    //-----------------------------------------------------------------------------------------------//

    // Elementos del modal
    const btnMakeAssistance = document.getElementById('btnMakeAssistance');
    const btnCheckHistory = document.getElementById('btnCheckHistory');
    const btnMakeReport = document.getElementById('btnMakeReport');
    const btnCheckUserManual = document.getElementById('btnCheckUserManual');

    // Contenedor del menú lateral
    const btnNavegationMenu = document.getElementById('btnNavegationMenu');

    // Evento para actualizar el menú lateral
    btnMakeAssistance.addEventListener('click', function () {
        actualizarMenu(['Registrar asistencia']);
    });

    btnCheckHistory.addEventListener('click', function () {
        actualizarMenu(['Historial de asistencia']);
    });

    btnMakeReport.addEventListener('click', function () {
        actualizarMenu(['Generar reporte', 'Plan seguimiento', 'Visualizar fichas']);
    });

    btnCheckUserManual.addEventListener('click', function () {
        actualizarMenu(['¿Necesitas ayuda?', 'Ver notificaciones', 'Plan seguimiento']);
    });

    // Función para actualizar el menú
    function actualizarMenu(opciones) {
        console.log("Actualizando menú con las siguientes opciones: ", opciones);
        btnNavegationMenu.innerHTML = ''; // Limpiar el menú lateral

        opciones.forEach(opcion => {
            const nuevoBoton = document.createElement('button');
            nuevoBoton.classList.add('btnNavegation');
            nuevoBoton.type = 'button';
            nuevoBoton.innerHTML = `<strong>${opcion}</strong>`;
            btnNavegationMenu.appendChild(nuevoBoton);
        });
    }

    // Delegación de eventos para los botones del menú lateral
    btnNavegationMenu.addEventListener('click', function (event) {
        if (event.target && event.target.tagName === 'BUTTON') {
            console.log("Botón del menú lateral clicado: ", event.target.innerText);
            // Aquí puedes añadir la lógica para manejar los clics en los botones actualizados.
        }
    });

    //-----------------------------------------------------------------------------------------------//

});

// Logica de navegacion de la pagina
class Vista {
    constructor() {
        this.heading = document.getElementById('heading');
        this.subHeading = document.querySelector('#subHeading strong');
        this.btnReport = document.querySelector('#btnReport')
        this.dynamicContentContainer = document.getElementById('dynamicContentContainer');
    }

    // actualizarContenido(titulo, subtitulo, contenido, templateId) {
    //     // Actualizar título y subtítulo
    //     this.heading.innerHTML = `<strong>${titulo}</span></strong>`;
    //     this.subHeading.textContent = subtitulo;

    //     // Limpiar y actualizar el contenido dinámico
    //     this.dynamicContentContainer.innerHTML = '';
    //     const template = document.getElementById(templateId);

    //     if (!template) {
    //         console.error(`Template con ID '${templateId}' no encontrado.`);
    //         return;
    //     }

    //     contenido.forEach(item => {
    //         const elemento = template.content.cloneNode(true);

    //         // Actualizar contenido del template dinámico según el templateId
    //         switch (templateId) {
    //             case 'dinamicCardCourse':
    //                 elemento.querySelector('strong').textContent = item.nombre;
    //                 break;
    //             case 'dinamicStudent':
    //                 elemento.querySelector('strong').textContent = item.titulo;
    //                 break;
    //             case 'dinamicCardNotification':
    //                 elemento.querySelector('strong').textContent = item.titulo;
    //                 elemento.querySelector('.text-body-secondary strong').textContent = `Enviada ${item.fecha}`;
    //                 break;
    //             case 'dinamicCardManual':
    //                 elemento.querySelector('strong').textContent = item.titulo;
    //                 break;
    //         }

    //         console.log({ titulo, subtitulo, contenido, templateId });

    //         // Insertar el template clonado en el contenedor dinámico
    //         this.dynamicContentContainer.appendChild(elemento);
    //     });
    // }

    actualizarContenido(titulo, subtitulo, contenido, templateId) {
        // Actualizar el título
        document.getElementById('heading').innerHTML = titulo;

        // Actualizar el subtítulo
        document.getElementById('subHeading').querySelector('strong').innerHTML = subtitulo;

        // Obtener el contenedor del contenido dinámico
        const dynamicContentContainer = document.getElementById('dynamicContentContainer');
        dynamicContentContainer.innerHTML = ''; // Limpiar el contenido anterior

        // Obtener la plantilla correspondiente por su ID
        const template = document.getElementById(templateId);

        if (template) {
            contenido.forEach(item => {
                // Clonar el contenido del template
                const contentCard = template.content.cloneNode(true);

                // Personalizar el contenido del template con los datos obtenidos
                contentCard.querySelector('strong').textContent = `Ficha ${item.nombre}`; // Suponiendo que 'nombre' es un atributo de los datos

                // Añadir el contenido al contenedor dinámico
                dynamicContentContainer.appendChild(contentCard);
            });
        } else {
            console.error('No se encontró el template con el ID: ', templateId);
        }
    }
}
    
