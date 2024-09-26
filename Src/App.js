document.getElementById('btnLogin').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const selectRol = document.getElementById('selectRol').value;
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

    let modalMessageError = '';

    if (!selectRol && !emailInput && !passwordInput){
        modalMessageError = 'Por favor, rellena todos los campos.';
    } else if (!selectRol){
        modalMessageError = 'Por favor, seleccione su tipo rol';
    } else if(!emailInput){
        modalMessageError = 'Por favor, ingrese su correo electrónico';
    } else if(!passwordInput){
        modalMessageError = 'Por favor, ingrese su contraseña';
    }

    if (modalMessageError) {
        document.getElementById('modalMessageError').innerHTML = `<strong style="color: #39A900;">${modalMessage}</strong>`;

        var modal = new bootstrap.Modal(document.getElementById('noneDataModal'));
        modal.show();
    }

});

