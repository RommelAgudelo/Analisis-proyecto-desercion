// // Selecciona elementos del DOM
// const inputTarea = document.getElementById('nuevaTarea');
// const botonAgregar = document.getElementById('agregarTarea');
// const listaTareas = document.getElementById('listaTareas');

// // Función para agregar tarea
// function agregarTarea() {
//     const tareaTexto = inputTarea.value;

//     // Validar que no esté vacío
//     if (tareaTexto.trim() === '') {
//         alert('Por favor, escribe una tarea.');
//         return;
//     }

//     // Crear un nuevo elemento de lista
//     const li = document.createElement('li');
//     li.className = 'list-group-item d-flex justify-content-between align-items-center';
//     li.textContent = tareaTexto;

//     // Botón para eliminar tarea
//     const botonEliminar = document.createElement('button');
//     botonEliminar.className = 'btn btn-danger btn-sm';
//     botonEliminar.textContent = 'Eliminar';
//     botonEliminar.onclick = function() {
//         listaTareas.removeChild(li);
//     };

//     // Agregar el botón a la tarea
//     li.appendChild(botonEliminar);
//     listaTareas.appendChild(li);

//     // Limpiar el campo de entrada
//     inputTarea.value = '';
// }

// // Evento para agregar tarea al hacer clic
// botonAgregar.addEventListener('click', agregarTarea);

// // Evento para agregar tarea al presionar Enter
// inputTarea.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         agregarTarea();
//     }
// 

// // Selecciona elementos del DOM
const menuSeleccion = document.getElementById('menuSeleccion');
const inputCorreo = document.getElementById('correoElectronico');
const inputContrasena = document.getElementById('contrasena');
const botonIniciarSesion = document.getElementById('iniciarSesion');

// Validar que no esté vacío
if (tareaTexto.trim() === '') {
    alert('Por favor, escribe una tarea.');
    return;
}

// Evento para agregar tarea al hacer clic
botonIniciarSesion.addEventListener('click', agregarTarea);

// Evento para agregar tarea al presionar Enter
inputTarea.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});