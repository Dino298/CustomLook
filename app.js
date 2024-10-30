// Array para almacenar los productos en el carrito
let carrito = [];

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
        case 'amarillo':
            productImage.src = 'https://shirtup.com/cdn/shop/files/HOVER_03806_-_Boxy_Men_s_T-shirt.png?v=1728546319&width=360';
            break;
        default:
            productImage.src = 'https://shirtup.com/cdn/shop/files/HOVER_03981_-_Comfort_Unisex_T-Shirt.png?v=1712664917&width=360'; // valor por defecto
    }
}

// Función para mostrar la sección seleccionada
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach((function (el) {
        el.style.display = 'none'; // Ocultar todas las secciones
    });
    document.getElementById(seccionId).style.display = 'block'; // Mostrar la sección seleccionada
}
function mostrarSeccion(seccionId) {
    alert("Función mostrarSeccion llamada con el id: " + seccionId);
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach((seccion) => {
        seccion.style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
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
        precio: 70.000 COP
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
