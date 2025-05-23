const offers = [
    { title: "💇 Haircut & Styling", desc: "Get a stylish haircut with blow-dry.", price: 699 },
    { title: "💆 Facial Glow Package", desc: "Deep cleansing and massage.", price: 1199 },
    { title: "💅 Manicure + Pedicure", desc: "Full hand and foot care.", price: 999 },
    { title: "💄 Bridal Makeup Trial", desc: "Premium bridal look demo.", price: 2999 },
    { title: "🎨 Hair Color + Wash", desc: "Trending shade & wash.", price: 1799 },
    { title: "🧖‍♀️ Full Body Spa", desc: "Herbal massage & steam.", price: 2499 },
];

const offerCards = document.getElementById("offer-cards");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderOffers() {
    offers.forEach((offer, index) => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-lg rounded-xl p-6 border border-pink-100 hover:shadow-xl flex flex-col justify-between";
        card.innerHTML = `
      <div>
        <h3 class="text-xl font-semibold text-pink-700 mb-2">${offer.title}</h3>
        <p class="text-gray-600 mb-4">${offer.desc}</p>
        <p class="text-pink-600 font-bold text-lg">৳${offer.price}</p>
      </div>
      <button class="mt-6 bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-800 transition add-to-cart" data-index="${index}">
        Add to Cart
      </button>
    `;
        offerCards.appendChild(card);
    });
}

function updateCartDisplay() {
    document.getElementById("cart-count").textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function showCartModal() {
    const modal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center";
        li.innerHTML = `
      <span>${item.title} - ৳${item.price}</span>
      <button class="text-red-500 hover:underline text-sm" onclick="removeFromCart(${index})">Remove</button>
    `;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    showCartModal();
}


function checkout() {
    alert("✅ Thank you! Your appointment is confirmed.");
    cart.length = 0;
    updateCartDisplay();
    document.getElementById("cart-modal").classList.add("hidden");
}

// Initial render
renderOffers();
updateCartDisplay();

// Events
document.body.addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
        const index = e.target.dataset.index;
        cart.push(offers[index]);
        updateCartDisplay();
    }
});

document.getElementById("view-cart").addEventListener("click", showCartModal);
document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.add("hidden");
});
document.getElementById("checkout-btn").addEventListener("click", checkout);
