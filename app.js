function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function (el) {
        el.style.display = 'none'; // Ocultar todas las secciones
    });
    document.getElementById(seccion).style.display = 'block'; // Mostrar la sección seleccionada
}

function cambiarImagen() {
    const color = document.getElementById('color').value;
    const productImage = document.getElementById('product-image');
    
    // Cambiar la imagen según el color seleccionado
    switch (color) {
        case 'blanco':
            productImage.src = 'images/camiseta_blanco.jpg';
            break;
        case 'negro':
            productImage.src = 'images/camiseta_negro.jpg';
            break;
        case 'rojo':
            productImage.src = 'images/camiseta_rojo.jpg';
            break;
        default:
            productImage.src = 'images/camiseta_blanco.jpg'; // valor por defecto
    }
}

// Muestra la sección de inicio al cargar la página
window.onload = function() {
    mostrarSeccion('inicio');
};
