document.getElementById('btnLogin').addEventListener('click', function(event) { 
    event.preventDefault(); // Evita el envío del formulario

    // Se declaran las variablr para obtener los valores de los campos
    const selectRol = document.getElementById('selectRol').value;
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

    // Se declara la variable para mostrar el mensaje de error
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
