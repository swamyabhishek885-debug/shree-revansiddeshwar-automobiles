// Get Product ID from URL
const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

// Find Product
const product = products.find(p => p.id === productId);

// Show Product Details
document.getElementById("product-image").src = product.image;

document.getElementById("product-name").textContent = product.name;

document.getElementById("product-price").textContent =
"₹" + product.price;

document.getElementById("product-brand").textContent =
"Brand : " + product.brand;

// Show Rating
document.getElementById("product-rating").textContent =
"⭐ " + product.rating + " / 5";

// Show Reviews
const reviewContainer = document.getElementById("reviews");

reviewContainer.innerHTML = "";

product.reviews.forEach(review => {

    reviewContainer.innerHTML += `

    <div class="card mt-3">

        <div class="card-body">

            <h6>👤 ${review.user}</h6>

            <p>${review.comment}</p>

        </div>

    </div>

    `;

});

// Submit New Review

document.getElementById("submitReview").addEventListener("click", () => {

    const user = document.getElementById("reviewName").value.trim();

    const comment = document.getElementById("reviewComment").value.trim();

    if(user === "" || comment === ""){

        alert("Please fill all fields.");

        return;

    }

    product.reviews.push({

        user:user,

        comment:comment

    });

    reviewContainer.innerHTML += `

    <div class="card mt-3">

        <div class="card-body">

            <h6>👤 ${user}</h6>

            <p>${comment}</p>

        </div>

    </div>

    `;

    document.getElementById("reviewName").value="";

    document.getElementById("reviewComment").value="";

    alert("Review Added Successfully!");

});