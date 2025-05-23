// cart.js
let cartCount = 0;

function updateCartDisplay() {
    document.getElementById('cart-count').innerText = cartCount;
}

function addToCart() {
    cartCount++;
    updateCartDisplay();
}

function removeFromCart() {
    if (cartCount > 0) {
        cartCount--;
        updateCartDisplay();
    }
}