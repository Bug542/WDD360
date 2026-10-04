let cart = 0;

function addToCart() {
  cart++;
  const cartCount = document.querySelector("#cart-count");
  cartCount.innerHTML = cart;
}

const button = document.querySelector("#add-to-cart");
button.addEventListener("click", addToCart);