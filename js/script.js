let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){

    let count = 0;

    cart.forEach(item=>{

        count += item.quantity;

    });

    const cartCount = document.getElementById("cart-count");

    if(cartCount){

        cartCount.textContent = count;

    }

}

updateCartCount();

document.addEventListener("click",function(e){

    if(e.target.classList.contains("add-cart")){

        const name = e.target.dataset.name;

        const price = Number(e.target.dataset.price);

        const existing = cart.find(item=>item.name===name);

        if(existing){

            existing.quantity++;

        }else{

            cart.push({

                name:name,

                price:price,

                quantity:1

            });

        }

        localStorage.setItem("cart",JSON.stringify(cart));

        updateCartCount();

        alert(name+" Added Successfully");

    }

});