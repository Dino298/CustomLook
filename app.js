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
