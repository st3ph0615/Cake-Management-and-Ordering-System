const searchInput = document.querySelector(".search-bar");

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card =>{

let name = card.querySelector("h3").textContent.toLowerCase();

card.style.display = name.includes(value) ? "block" : "none";

});

});
//filter by category
const filter = document.getElementById("categoryFilter");
const cakes = document.querySelectorAll(".product-card");

filter.addEventListener("change", function () {

    const selected = this.value;

    cakes.forEach(cake => {

        if (selected === "" || cake.dataset.category === selected) {
            cake.style.display = "block";
        } else {
            cake.style.display = "none";
        }

    });

});


//open overlay
const addButtons = document.querySelectorAll(".add-cart");

const overlay = document.getElementById("cartOverlay");
const cartImage = document.getElementById("cartImage");
const cartName = document.getElementById("cartName");
const cartPrice = document.getElementById("cartPrice");

addButtons.forEach(button => {

    button.addEventListener("click", function(){

        const product = this.closest(".product-card");

        const image = product.querySelector(".product-img").src;
        const name = product.querySelector(".product-name").innerText;
        const price = product.querySelector(".product-price").innerText;

        cartImage.src = image;
        cartName.innerText = name;
        cartPrice.innerText = price;

        overlay.classList.add("active");

    });

});

//close overlay

document.querySelector(".continue-btn").addEventListener("click", ()=>{

overlay.classList.remove("active");

});


