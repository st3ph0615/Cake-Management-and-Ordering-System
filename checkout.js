document.addEventListener("DOMContentLoaded", function(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const itemsContainer = document.getElementById("checkout-items");

let subtotal = 0;

cart.forEach(item => {

let price = parseFloat(item.price.replace("$",""));
let qty = item.qty || 1;

subtotal += price * qty;

itemsContainer.innerHTML += `
<div class="checkout-item">

${item.name}  × ${qty}

<span>$${(price * qty).toFixed(2)}</span>

</div>
`;

});

let delivery = 5;

document.getElementById("checkout-subtotal").innerText = subtotal.toFixed(2);
document.getElementById("checkout-total").innerText = (subtotal + delivery).toFixed(2);


document.getElementById("order-form").addEventListener("submit", function(e){

e.preventDefault();

alert("Order placed successfully! 🎉");

localStorage.removeItem("cart");

window.location.href = "./customer_homepage/home.html";

});

});