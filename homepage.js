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