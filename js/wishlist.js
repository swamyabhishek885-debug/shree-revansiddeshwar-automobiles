let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.addEventListener("click", function(e){

    if(e.target.classList.contains("wishlist-btn")){

        const id = Number(e.target.dataset.id);

        const product = products.find(p => p.id === id);

        const exists = wishlist.find(item => item.id === id);

        if(!exists){

            wishlist.push(product);

            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            alert(product.name + " added to Wishlist ❤️");

        }else{

            alert("Already in Wishlist ❤️");

        }

    }

});