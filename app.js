// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach((seccion) => {
        seccion.style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
}

// Función para cambiar la imagen según el color seleccionado
function cambiarImagen() {
    const color = document.getElementById('color').value;
    const productImage = document.getElementById('product-image');

    switch (color) {
        case 'blanco':
            productImage.src = 'https://example.com/path-to-your-image/camiseta_blanco.jpg';
            break;
        case 'negro':
            productImage.src = 'https://example.com/path-to-your-image/camiseta_negro.jpg';
            break;
        case 'beige':
            productImage.src = 'https://example.com/path-to-your-image/camiseta_beige.jpg';
            break;
        default:
            productImage.src = 'https://example.com/path-to-your-image/camiseta_blanco.jpg';
    }
}

// Función para cargar y mostrar una imagen personalizada
function cargarImagen(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const productImage = document.getElementById('product-image');
        productImage.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

// Función para agregar el producto al carrito
function agregarAlCarrito() {
    const color = document.getElementById('color').value;
    const talla = document.getElementById('talla').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    const carritoContenido = document.getElementById('carrito-contenido');
    const item = document.createElement('p');
    item.textContent = `Camiseta - Color: ${color}, Talla: ${talla}, Cantidad: ${cantidad}`;
    carritoContenido.appendChild(item);
}

// Eventos para la navegación de secciones
document.getElementById('inicio-link').addEventListener('click', () => mostrarSeccion('inicio'));
document.getElementById('productos-link').addEventListener('click', () => mostrarSeccion('productos'));
document.getElementById('carrito-link').addEventListener('click', () => mostrarSeccion('carrito'));
document.getElementById('contacto-link').addEventListener('click', () => mostrarSeccion('contacto'));
document.getElementById('registro-link').addEventListener('click', () => mostrarSeccion('registro'));
document.getElementById('login-link').addEventListener('click', () => mostrarSeccion('login'));
