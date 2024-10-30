document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('Precio: $', ''));
            const color = productElement.querySelector('#color').value;
            const size = productElement.querySelector('#talla').value;

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - Color: ${color}, Talla: ${size} - $${productPrice}`;
            cartItems.appendChild(cartItem);

            total += productPrice;
            totalPrice.textContent = `Total: $${total.toFixed(2)}`;
        });
    });

    document.getElementById('checkout').addEventListener('click', function() {
        alert('Gracias por tu compra!');
        cartItems.innerHTML = '';
        total = 0;
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('Precio: $', ''));
            const color = productElement.querySelector('#color').value;
            const size = productElement.querySelector('#talla').value;

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - Color: ${color}, Talla: ${size} - $${productPrice}`;
            cartItems.appendChild(cartItem);

            total += productPrice;
            totalPrice.textContent = `Total: $${total.toFixed(2)}`;
        });
    });

    document.getElementById('checkout').addEventListener('click', function() {
        alert('Gracias por tu compra!');
        cartItems.innerHTML = '';
        total = 0;
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    });
});

/* Función para mostrar la sección seleccionada */
function mostrarSeccion(seccionId) {
    // Oculta todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('visible');
    });

    // Muestra solo la sección seleccionada
    document.getElementById(seccionId).classList.add('visible');
}
