const productList = document.getElementById("product-list");

const params = new URLSearchParams(window.location.search);

const selectedBrand = params.get("brand");

let filteredProducts = selectedBrand
    ? products.filter(p => p.brand === selectedBrand)
    : products;

function displayProducts(productArray){

    productList.innerHTML = "";

    productArray.forEach(product=>{

        productList.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card product-card h-100">

                <img src="${product.image}"
                class="card-img-top product-image">

                <div class="card-body text-center">

                    <h5>${product.name}</h5>

                    <p class="text-success fw-bold">

                        ₹${product.price}

                    </p>

                    <p>

                        Brand : ${product.brand}

                    </p>

                    <div class="d-flex gap-2 mb-2">

    <a href="product-details.html?id=${product.id}"
       class="btn btn-outline-primary w-75">

        View Details

    </a>

    <button
        class="btn btn-danger wishlist-btn"
        data-id="${product.id}">

        ❤

    </button>

</div>

<button
class="btn btn-primary w-100 add-cart"
data-name="${product.name}"
data-price="${product.price}">

Add To Cart

</button>

                </div>

            </div>

        </div>

        `;

    });

}

displayProducts(filteredProducts);

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup",()=>{

    const keyword = searchBox.value.toLowerCase();

    const searchedProducts = filteredProducts.filter(product=>{

        return product.name.toLowerCase().includes(keyword);

    });

    displayProducts(searchedProducts);

});

const sortProducts = document.getElementById("sortProducts");

sortProducts.addEventListener("change", () => {

    let sortedProducts = [...filteredProducts];

    switch(sortProducts.value){

        case "low":

            sortedProducts.sort((a,b)=>a.price-b.price);

            break;

        case "high":

            sortedProducts.sort((a,b)=>b.price-a.price);

            break;

        case "az":

            sortedProducts.sort((a,b)=>a.name.localeCompare(b.name));

            break;

        case "za":

            sortedProducts.sort((a,b)=>b.name.localeCompare(a.name));

            break;

    }

    displayProducts(sortedProducts);

});