document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            title: "Hair Oil",
            desc: "Nourishing coconut-infused oil for stronger roots",
            price: 499,
            category: "Hair",
            img: "images/hair oil.png"
        },
        {
            title: "Hair Pack",
            desc: "Herbal treatment for deep conditioning and shine",
            price: 699,
            category: "Hair",
            img: "images/hair pack.png"
        },
        {
            title: "Face Pack",
            desc: "Brightening face pack with natural ingredients",
            price: 599,
            category: "Face pack",
            img: "images/pace pack.png"
        }
    ];

    let cart = JSON.parse(localStorage.getItem("productCart")) || [];

    const productCards = document.getElementById("product-cards");

    function renderProducts(filter = "all") {
        productCards.innerHTML = "";
        const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

        filtered.forEach((product, index) => {
            const card = document.createElement("div");
            card.className = "bg-white shadow-lg rounded-xl p-4 border hover:shadow-xl flex flex-col";

            card.innerHTML = `
        <img src="${product.img}" alt="${product.title}" class="h-40 w-full object-cover rounded mb-4">
        <div class="flex-grow">
          <h3 class="text-xl font-semibold text-pink-700 mb-1">${product.title}</h3>
          <p class="text-gray-600 text-sm mb-2">${product.desc}</p>
          <p class="text-pink-600 font-bold text-lg mb-3">৳${product.price}</p>
        </div>
        <button class="mt-auto bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-800 transition add-to-cart" data-index="${index}">
          Add to Cart
        </button>
      `;
            productCards.appendChild(card);
        });
    }

    function updateCartDisplay() {
        document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        localStorage.setItem("productCart", JSON.stringify(cart));
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
        <span>${item.title} (x${item.quantity}) - ৳${item.price * item.quantity}</span>
        <button class="text-red-500 hover:underline text-sm" onclick="removeFromCart(${index})">Remove</button>
      `;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCartDisplay();
        showCartModal();
    }

    function checkout() {
        alert("✅ Thank you! Your order has been placed.");
        cart.length = 0;
        updateCartDisplay();
        document.getElementById("cart-modal").classList.add("hidden");
    }

    // Event Listeners
    document.body.addEventListener("click", e => {
        if (e.target.classList.contains("add-to-cart")) {
            const index = e.target.dataset.index;
            const product = products[index];
            const existing = cart.find(item => item.title === product.title);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCartDisplay();
        }
    });

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");
            renderProducts(category);
        });
    });

    document.getElementById("view-cart").addEventListener("click", showCartModal);
    document.getElementById("close-cart").addEventListener("click", () => {
        document.getElementById("cart-modal").classList.add("hidden");
    });
    document.getElementById("checkout-btn").addEventListener("click", checkout);

    // Initial render
    renderProducts();
    updateCartDisplay();
});
