// Funcionamiento del formulario de inicio de sesión
document.getElementById('btnLogin').addEventListener('click', function(event) { 
    event.preventDefault();

    // Se declaran las variables para obtener los valores de los campos
    const selectRol = document.getElementById('selectRol').value;
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

    // Se declara la variable que muestra el mensaje de error
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

// Funcionamiento de redirección de los botones de pagina principal
document.getElementById('btnCheckCourse').addEventListener('click', function() {
    window.location.href = 'ruta/a/tu/template.html';
});
document.getElementById('btnCheckNotifications').addEventListener('click', function() {
    window.location.href = 'ruta/a/tu/template.html';
});

// Funcionamiento de redirección del boton de "btnCheckUserManual", (MANUAL DE USUARIO)
document.getElementById('btnCheckUserManual').addEventListener('click', function() {
    window.location.href = 'ruta/a/tu/template.html';
});