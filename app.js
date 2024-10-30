// Array para almacenar los productos en el carrito
let carrito = [];

// Función para cambiar la imagen según el color seleccionado
function cambiarImagen() {
    const color = document.getElementById('color').value;
    const productImage = document.getElementById('product-image');
    
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

// Función para mostrar la sección seleccionada
function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function (el) {
        el.style.display = 'none'; // Ocultar todas las secciones
    });
    document.getElementById(seccion).style.display = 'block'; // Mostrar la sección seleccionada
}

// Función para añadir un producto al carrito
function agregarAlCarrito() {
    const color = document.getElementById('color').value;
    const talla = document.getElementById('talla').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const producto = {
        nombre: 'Camiseta Personalizable',
        color: color,
        talla: talla,
        cantidad: cantidad,
        precio: 15.99
    };

    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const carritoContenido = document.getElementById('carrito-contenido');
    carritoContenido.innerHTML = ''; // Limpiar el contenido previo

    if (carrito.length === 0) {
        carritoContenido.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        carrito.forEach((producto, index) => {
            carritoContenido.innerHTML += `
                <div>
                    <p>${producto.cantidad} x ${producto.nombre} - Color: ${producto.color}, Talla: ${producto.talla} - Precio: $${producto.precio}</p>
                </div>
            `;
        });
    }
}

// Muestra la sección de inicio al cargar la página
window.onload = function() {
    mostrarSeccion('inicio');
};

// Evento para añadir al carrito
document.querySelector('.add-to-cart').addEventListener('click', agregarAlCarrito);
