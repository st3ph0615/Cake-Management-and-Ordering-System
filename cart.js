let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   ADD TO CART (PRODUCT PAGE)
   ========================= */

const cartButtons = document.querySelectorAll(".add-cart");

if(cartButtons.length > 0){

cartButtons.forEach(button => {

button.addEventListener("click", function(){

const product = this.closest(".product-card");

const image = product.querySelector(".product-img").src;
const name = product.querySelector(".product-name").innerText;
const price = product.querySelector(".product-price").innerText;

cart.push({
image,
name,
price
});

localStorage.setItem("cart", JSON.stringify(cart));

});

});

}


/* =========================
   LOAD CART ITEMS (CART PAGE)
   ========================= */

document.addEventListener("DOMContentLoaded", function(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");

function renderCart(){

cartContainer.innerHTML = "";
let total = 0;

cart.forEach((item, index) => {

let price = parseFloat(item.price.replace("$",""));

total += price * (item.qty || 1);

cartContainer.innerHTML += `
<div class="cart-card">

<div class="cart-product">

<img src="${item.image}" class="cart-img">

<div class="cart-info">

<h4>${item.name}</h4>

<p>$${price.toFixed(2)}</p>

</div>

</div>

<div class="cart-qty">

<button class="qty-minus" data-index="${index}">−</button>

<span>${item.qty || 1}</span>

<button class="qty-plus" data-index="${index}">+</button>

</div>

<div class="cart-price">
$${(price * (item.qty || 1)).toFixed(2)}
</div>

<button class="remove" data-index="${index}">🗑</button>

</div>
`;

});

let delivery = 5;

document.getElementById("cart-subtotal").innerText = total.toFixed(2);
document.getElementById("cart-total").innerText = (total + delivery).toFixed(2);

localStorage.setItem("cart", JSON.stringify(cart));

}

renderCart();

document.addEventListener("click", function(e){

if(e.target.classList.contains("remove")){

let index = e.target.dataset.index;

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

renderCart();

}

if(e.target.classList.contains("qty-plus")){

let index = e.target.dataset.index;

cart[index].qty = (cart[index].qty || 1) + 1;

renderCart();

}

if(e.target.classList.contains("qty-minus")){

let index = e.target.dataset.index;

if((cart[index].qty || 1) > 1){
cart[index].qty = (cart[index].qty || 1) - 1;
}

renderCart();

}

});

});