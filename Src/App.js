document.getElementById('btnLogin').addEventListener('click', function(event) {
    event.preventDefault(); //Esto hace que el formulario no recargue la página

    const selectRol = document.getElementById('selectRol').value;
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

    let modalMessageError = '';

    if (!selectRol && !emailInput && !passwordInput){

    } else if (!selectRol){
        modalMessageError = 'Por favor, seleccione su tipo rol';
    } else if(!emailInput){
        modalMessageError = 'Por favor, ingrese su correo electrónico';
    } else if(!passwordInputInput){
        modalMessageError = 'Por favor, ingrese su contraseña';
    }

    document.getElementById('modalMessageError').innerHTML = `<strong style="color: #39A900;">${modalMessage}</strong>`;
});

