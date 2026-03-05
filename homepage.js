const searchInput = document.querySelector(".search-bar");

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card =>{

let name = card.querySelector("h3").textContent.toLowerCase();

card.style.display = name.includes(value) ? "block" : "none";

});

});