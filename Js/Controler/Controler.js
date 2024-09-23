document.getElementById('cambiar-estilo').addEventListener('click', () => {
    modelo.cambiarEstilo(); // Cambiamos el estilo en el modelo
    vista.actualizarEstilo(modelo.color, modelo.tamaño); // Actualizamos la vista con los nuevos estilos
});