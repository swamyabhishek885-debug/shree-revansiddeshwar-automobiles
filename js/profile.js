// Read Wishlist
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Read Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Profile Counts
document.getElementById("wishlistCount").textContent = wishlist.length;

let totalCartItems = 0;

cart.forEach(item => {
    totalCartItems += item.quantity;
});

document.getElementById("cartCount").textContent = totalCartItems;