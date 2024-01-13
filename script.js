const btn = document.querySelector("button.Burger_button")
const nav = document.querySelector(".mobileNav");

btn.addEventListener("click", function(){
    nav.classList.toggle("hidden")
})
// Fetch cart items from local storage or a server
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Render cart items template
const cartItemsContainer = document.querySelector('.grid');
const cartItemTemplate = document.querySelector('#cart-item-template');

// For each cart item, clone the template, update its content, and append it to the container
cartItems.forEach(item => {
  const cartItem = cartItemTemplate.content.cloneNode(true);
  const imageElement = cartItem.querySelector('img');
  const nameElement = cartItem.querySelector('h1');
  const priceElement = cartItem.querySelector('.text-2xl.font-semibold');
  const quantityElement = cartItem.querySelector('#amount1');

  // Update the template with actual data from the cart item
  imageElement.src = item.image || "placeholder.jpg";
  nameElement.textContent = item.name;
  priceElement.textContent = `$${item.price}`;
  quantityElement.value = item.quantity || 1;

  // Add event listener for quantity change
  quantityElement.addEventListener('change', function() {
    // Update the corresponding item in the cart with the new quantity
    item.quantity = parseInt(this.value);
    // Update local storage or server with the updated cart
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Update price based on the new quantity (optional)
  });

  // Append the updated template to the container
  cartItemsContainer.appendChild(cartItem);
});

// Implement additional logic needed for order button functionality, updating cart summary, etc.
