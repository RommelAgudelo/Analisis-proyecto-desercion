// Controlador.js

class Controlador {

    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.vistaActual = null;
        this.inicializarEventos();
        this.inicializarEventosDinamicos();
        this.inicializarFiltroAsistencia();
    }

    inicializarEventos() {
        // Eventos de los botones estáticos
        const botones = {
            'btnCheckCourse': 'marcarAsistenciaFicha',
            'btnCheckNotifications': 'notificaciones',
            'btnFollowUpPlan': 'seguimientoficha',
            'btnCheckUserManual': 'ayuda',
            'btnMakeReport': 'generareporte',
            'btnCheckHistory': 'historialFicha'
        };

        //  Eventos a todos los botones estáticos
        Object.entries(botones).forEach(([id, vista]) => {
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.addEventListener('click', () => this.cambiarVista(vista));
            }
        });

        const btnFiltrarHistorial = document.getElementById('btnFiltrerDayHistory');
        if (btnFiltrarHistorial) {
            btnFiltrarHistorial.addEventListener('click', () => this.filtrarHistorialAsistenciaModal());
        }

        // Evento para abrir modal con detalles de estudiante
        document.addEventListener('mostrarAsistenciaEstudiante', (event) => {
            const nombreEstudiante = event.detail.nombre;
            this.prepararModalAsistencia(nombreEstudiante);
        });
    }

    inicializarEventosDinamicos() {
        document.getElementById('dynamicContentContainer').addEventListener('click', (e) => {
            // Manejar el botón de seleccionar ficha para asistencia
            if (e.target.closest('#btnSelectAttendance')) {
                const fichaContainer = e.target.closest('#contentCardCourse');
                const fichaNumero = fichaContainer ?
                    fichaContainer.querySelector('strong').textContent.split(' ')[1] :
                    null;

                this.cambiarVistaConDatos('marcarAsistenciaEstudiante', {
                    fichaSeleccionada: fichaNumero
                });
            }

            // Manejar el botón de seleccionar ficha para historial
            if (e.target.closest('#btnSelectHistory')) {
                const fichaContainer = e.target.closest('#contentCardCourseHistory');
                if (fichaContainer) {
                    const fichaNumero = fichaContainer.querySelector('strong').textContent.split(' ')[1];

                    // Cambiar a la vista de historial de aprendiz
                    this.cambiarVistaConDatos('historialAprendiz', {
                        fichaSeleccionada: fichaNumero
                    });
                }
            }

            // Manejador para el botón de reporte
            if (e.target.closest('#btnSelectReport')) {
                const fichaContainer = e.target.closest('#contentCardGenerateReport');
                if (fichaContainer) {
                    const fichaNumero = fichaContainer.querySelector('strong').textContent.split(' ')[1];
                    console.log('Ficha seleccionada para reporte:', fichaNumero); // Debug
                    this.cambiarVistaConDatos('generareporteestudiante', {
                        fichaSeleccionada: fichaNumero
                    });
                }
            }

            // Manejador para el botón de seguimiento
            if (e.target.closest('#btnSeguimiento')) {
                const estudianteContainer = e.target.closest('#contentCardCourseTracking');
                if (estudianteContainer) {
                    const nombreEstudiante = estudianteContainer.querySelector('strong').textContent;
                    console.log(`Botón de seguimiento presionado para: ${nombreEstudiante}`); // Log adicional
                    this.cambiarVistaConDatos('seguimientoestudiante', {
                        nombreEstudiante: nombreEstudiante
                    });
                }
            }

            // Manejador para el botón de seguimiento de ficha
            if (e.target.closest('#btnSeguimientoFicha')) {
                const fichaContainer = e.target.closest('#contentCardCourseTracking');
                if (fichaContainer) {
                    const fichaNumero = fichaContainer.querySelector('strong').textContent.split(' ')[1];
                    this.cambiarVistaConDatos('seguimientoestudiante', {
                        fichaSeleccionada: fichaNumero
                    });
                }
            }

            // Manejador para el botón de seguimiento de estudiante
            if (e.target.closest('#btnSeguimientoEstudiante')) {
                const estudianteContainer = e.target.closest('#contentCardStudentTracking');
                if (estudianteContainer) {
                    const nombreEstudiante = estudianteContainer.querySelector('strong').textContent;
                    this.manejarModalDeSeguimiento(nombreEstudiante);
                }
            }
        });

        // Evento para manejar notificaciones
        document.getElementById('dynamicContentContainer').addEventListener('click', (e) => {
            const btnNotificacion = e.target.closest('#btnNotification');
            if (btnNotificacion) {
                const titulo = btnNotificacion.getAttribute('data-titulo');
                const fecha = btnNotificacion.getAttribute('data-fecha');
                const contenido = btnNotificacion.getAttribute('data-contenido');

                // Actualizar el modal
                document.querySelector('#notificationModal .modal-header .card-title').innerHTML =
                    `<strong>Estudiante en <span style="color: #39A900;">riesgo</span>: ${titulo}</strong>`;

                document.querySelector('#notificationModal .modal-body small').textContent =
                    `Enviada ${fecha}`;

                document.querySelector('#notificationModal .modal-body p:last-child').textContent =
                    contenido;
            }
        });

        // Evento que abre el pdf de reporte estudiante
        document.getElementById('dynamicContentContainer').addEventListener('click', (e) => {
            // Manejar el botón de generar reporte de estudiante
            if (e.target.closest('#btnGenerateReport')) {
                // Abre el PDF
                window.open('../Resources/Documents/StudentReport.pdf', '_blank');
            }
        });

        // Evento que abre manual de usuario
        document.getElementById('dynamicContentContainer').addEventListener('click', (e) => {
            // Manejar el botón de generar manual de usuario
            if (e.target.closest('#btnManualDownload')) {
                // Abre el PDF
                window.open('../Resources/Documents/UserManual.pdf', '_blank');
            }
        });

        // Añadir evento de búsqueda
        const searchBar = document.getElementById('searchBarSpaceWork');
        if (searchBar) {
            searchBar.addEventListener('input', () => this.filtrarContenido(searchBar.value));
        }
    }

    // Función para manejar la lógica de apertura de los modales
    manejarModalDeSeguimiento(nombreEstudiante) {
        // Cerrar cualquier modal abierto previamente
        this.cerrarTodosLosModales();

        // Buscar el estudiante en los datos del modelo
        const estudiante = this.modelo.seguimientoestudiante.datos.find(est => est.nombre === nombreEstudiante);

        if (estudiante) {
            if (estudiante.tienePlan) {
                // Si tiene un plan, mostrar el modal con los detalles
                this.mostrarModalDeDetalles(estudiante);
            } else {
                // Si no tiene un plan, mostrar el modal de advertencia
                this.mostrarModalDeAdvertencia();
            }
        } else {
            console.error("Estudiante no encontrado:", nombreEstudiante);
        }
    }

    // Cerrar todos los modales abiertos
    cerrarTodosLosModales() {
        const modalesAbiertos = document.querySelectorAll('.modal.show');
        modalesAbiertos.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            bsModal.hide();  // Cerrar el modal usando Bootstrap Modal API
        });
    }

    // Mostrar el modal de detalles de seguimiento
    mostrarModalDeDetalles(estudiante) {
        const modal = new bootstrap.Modal(document.getElementById('MoreDetaillFillUpModal'));

        // Personalizar el contenido del modal con los detalles del estudiante
        document.querySelector('#MoreDetaillFillUpModal .modal-body').innerHTML = `
        <div style="text-align: start; margin: 1vh; font-size: 20px;">
            <strong style="color: #00304D;">${estudiante.nombre}</strong>
            <p class="card-text">
                <small class="text-body-secondary" style="font-size: 15px;">
                    <strong>Creado el 7 de octubre del 2024, 13:00</strong>
                </small>
            </p>
            <p>
                <small>El estudiante ${estudiante.nombre} ha sido identificado con un bajo rendimiento en cuanto a asistencias académicas. Se propone un plan de seguimiento para mejorar su rendimiento en asistencias.</small>
            </p>
        </div>
    `;
        modal.show();
    }

    // Mostrar el modal de advertencia
    mostrarModalDeAdvertencia() {
        const modal = new bootstrap.Modal(document.getElementById('warningFillUpModal'));
        modal.show();
    }


    inicializarFiltroAsistencia() {
        const btnFiltrar = document.getElementById('btnFiltrerCourse');
        if (btnFiltrar) {
            btnFiltrar.addEventListener('click', () => this.filtrarAsistencia());
        }
    }

    filtrarAsistencia() {
        // Limpiar contenedor de asistencia
        const asistContainer = document.getElementById('asistContainer');
        asistContainer.innerHTML = '';

        // Obtener valores de filtros
        const mesSel = document.getElementById('selectMes').value;
        const semanaSel = document.getElementById('selectSemana').value;
        const bloqueSel = document.getElementById('selectBloque').value;

        // Filtrar días de asistencia
        const diasFiltrados = this.modelo.diasAsistencia.filter(dia => {
            const mesCoincide = !mesSel || dia.mes === parseInt(mesSel);
            const semanaCoincide = !semanaSel || dia.semana === parseInt(semanaSel);
            const bloqueCoincide = !bloqueSel || dia.bloque === parseInt(bloqueSel);

            return mesCoincide && semanaCoincide && bloqueCoincide;
        });

        // Renderizar días filtrados
        diasFiltrados.forEach(dia => {
            const tarjetaDia = this.vista.renderizarDiaAsistencia(dia);
            asistContainer.innerHTML += tarjetaDia;
        });
    }

    cargarDiasAsistenciaEstudiante(nombreEstudiante) {
        const diasAsistencia = this.modelo.obtenerDiasAsistenciaPorEstudiante(nombreEstudiante);

        // Limpiar contenedor de asistencia
        const asistContainer = document.getElementById('asistContainer');
        asistContainer.innerHTML = '';

        // Renderizar días de asistencia
        diasAsistencia.forEach(dia => {
            const tarjetaDia = this.vista.renderizarDiaAsistencia(dia);
            asistContainer.innerHTML += tarjetaDia;
        });
    }

    renderizarDiasAsistencia(diasAsistencia) {
        const historyContainer = document.getElementById('historyContainer');
        historyContainer.innerHTML = '';

        diasAsistencia.forEach(dia => {
            const tarjetaDia = this.vista.renderizarHistorialDiaAsistencia(dia);
            historyContainer.innerHTML += tarjetaDia;
        });
    }

    renderizarDiasAsistencia(diasAsistencia) {
        const asistContainer = document.getElementById('asistContainer');
        asistContainer.innerHTML = '';

        diasAsistencia.forEach(dia => {
            const tarjetaDia = this.vista.renderizarHistorialDiaAsistencia(dia);
            asistContainer.innerHTML += tarjetaDia;
        });
    }

    filtrarContenido(terminoBusqueda) {
        // Convertir a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
        const busqueda = terminoBusqueda.toLowerCase().trim();

        // Obtener la vista actual desde el último template usado
        const configuracionActual = Object.values(this.modelo.vistasDisponibles).find(
            config => config.template === this.vista.ultimoTemplateUsado
        );

        if (configuracionActual) {
            // Filtrar los datos según el término de búsqueda
            const datosFiltrados = configuracionActual.datos.filter(dato => {
                // Buscar en diferentes propiedades dependiendo del tipo de dato
                if (dato.numero) {
                    return dato.numero.toLowerCase().includes(busqueda);
                }
                if (dato.nombre) {
                    return dato.nombre.toLowerCase().includes(busqueda);
                }
                if (dato.titulo) {
                    return dato.titulo.toLowerCase().includes(busqueda);
                }
                return false;
            });

            // Recargar la vista con los datos filtrados
            this.vista.cargarTemplate(configuracionActual.template, datosFiltrados);
        }
    }

    cambiarVistaConDatos(tipoVista, datosAdicionales) {
        const configuracion = this.modelo.obtenerConfiguracionVista(tipoVista);

        if (configuracion) {
            let datosFiltrados = [...configuracion.datos];

            // Filtrar estudiantes por ficha seleccionada
            if (datosAdicionales?.fichaSeleccionada && tipoVista === 'historialAprendiz') {
                datosFiltrados = configuracion.datos.filter(estudiante =>
                    estudiante.ficha === datosAdicionales.fichaSeleccionada
                );
            }

            // Actualizar la vista
            this.vista.actualizarTitulo(configuracion.titulo);
            this.vista.actualizarSubtitulo(configuracion.subtitulo);
            this.vista.cargarTemplate(configuracion.template, datosFiltrados);
        }
    }

    cambiarVista(tipoVista) {
        this.cambiarVistaConDatos(tipoVista, null);
    }

}

// funcion de filtrado de opciones de menu de navegacion
document.getElementById('searchBar').addEventListener('input', filterOptionMenu);

function filterOptionMenu() {
    const searchText = document.getElementById('searchBar').value.toLowerCase();
    const btnNavegation = document.querySelectorAll('#btnNavegation .btnNavegation');

    btnNavegation.forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        if (btnText.includes(searchText)) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
}