let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const grandTotal = document.getElementById("grand-total");

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <tr>

            <td>${item.name}</td>

            <td>₹${item.price}</td>

            <td>

                <button class="btn btn-danger btn-sm"
                onclick="decreaseQuantity(${index})">

                -

                </button>

                <span class="mx-3">

                ${item.quantity}

                </span>

                <button class="btn btn-success btn-sm"
                onclick="increaseQuantity(${index})">

                +

                </button>

            </td>

            <td>

                ₹${item.price * item.quantity}

            </td>

            <td>

                <button class="btn btn-danger btn-sm"
                onclick="removeItem(${index})">

                Remove

                </button>

            </td>

        </tr>

        `;

    });

    grandTotal.textContent = total;

}

function increaseQuantity(index){

    cart[index].quantity++;

    saveCart();

}

function decreaseQuantity(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    saveCart();

}

function removeItem(index){

    cart.splice(index,1);

    saveCart();

}

function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

displayCart();