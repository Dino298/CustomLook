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
            productImage.src = 'https://shirtup.com/cdn/shop/files/HOVER_03981_-_Comfort_Unisex_T-Shirt.png?v=1712664917&width=360';
            break;
        case 'negro':
            productImage.src = 'https://shirtup.com/cdn/shop/files/HOVER_11150_-_Basic_Men_s_V-neck_T-shirt.png?v=1711702508&width=360';
            break;
        case 'beige':
            productImage.src = 'https://shirtup.com/cdn/shop/files/HOVER_03565_-_Comfort_Men_s_Fitted_T-shirt.png?v=1711702509&width=360';
            break;
        default:
            productImage.src = 'https://shirtup.com/cdn/shop/files/HOVER_03981_-_Comfort_Unisex_T-Shirt.png?v=1712664917&width=360';
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
