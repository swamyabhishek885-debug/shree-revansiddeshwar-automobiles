// Load products from products.js
let adminProducts = [...products];

// Product list container
const productList = document.getElementById("productList");

// Display products
function displayProducts() {

    productList.innerHTML = "";

    adminProducts.forEach((product, index) => {

        productList.innerHTML += `

        <div class="d-flex justify-content-between align-items-center border rounded p-3 mb-2">

            <div>

                <strong>${product.name}</strong><br>

                ₹${product.price}<br>

                ${product.brand}

            </div>

            <button
            class="btn btn-danger"
            onclick="deleteProduct(${index})">

                Delete

            </button>

        </div>

        `;

    });

}

// Initial display
displayProducts();

// Add Product
document.getElementById("addProduct").addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();

    const price = Number(document.getElementById("price").value);

    const brand = document.getElementById("brand").value.trim();

    const image = document.getElementById("image").value.trim();

    if (!name || !price || !brand || !image) {

        alert("Please fill all fields.");

        return;

    }

    adminProducts.push({
        id: adminProducts.length + 1,
        name,
        price,
        brand,
        image,
        rating: 5,
        reviews: []
    });

    displayProducts();

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("image").value = "";

    alert("Product Added!");
});

// Delete Product
function deleteProduct(index) {

    if (confirm("Delete this product?")) {

        adminProducts.splice(index, 1);

        displayProducts();

    }

}