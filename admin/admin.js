let editingRow = null;
// Load page and highlight active menu
function loadPage(page, element){

fetch("pages/" + page + ".html")
.then(response => {
    if(!response.ok){
        throw new Error("Page not found");
    }
    return response.text();
})
.then(data => {
    document.getElementById("content").innerHTML = data;
})
.catch(error => {
    document.getElementById("content").innerHTML =
    "<h2 style='padding:20px'>Error loading page</h2>";
    console.error(error);
});

let links = document.querySelectorAll(".sidebar li");
links.forEach(li => li.classList.remove("active"));

if(element){
element.classList.add("active");
}
}


// ---------- Cake Modal ----------

function openCakeModal(){
document.getElementById("cakeModal").style.display = "flex";
}

function closeCakeModal(){
document.getElementById("cakeModal").style.display = "none";
}


// ---------- Image Preview ----------

function previewImage(event){

const file = event.target.files[0];
const preview = document.getElementById("preview");

if(file){
preview.src = URL.createObjectURL(file);
preview.style.display = "block";
}

}


// ---------- Edit Cake ----------

function openEditCake(name, category, description, price){

document.getElementById("cakeModal").style.display="flex";

document.querySelector("#cakeName").value = name;
document.querySelector("#cakeCategory").value = category;
document.querySelector("#cakeDescription").value = description;
document.querySelector("#cakePrice").value = price;

}


// ---------- Delete Cake ----------

function confirmDelete(){

if(confirm("Are you sure you want to delete this cake?")){
alert("Cake deleted!");
}

}


// ---------- Search Cake ----------

function searchCake(){

let input = document.getElementById("searchCake").value.toLowerCase();
let rows = document.querySelectorAll(".table tr");

rows.forEach((row,index)=>{

if(index===0) return;

let text = row.innerText.toLowerCase();

row.style.display = text.includes(input) ? "" : "none";

});

}


// ---------- Filter Category ----------

function filterCategory(){

let category = document.getElementById("categoryFilter").value;
let rows = document.querySelectorAll(".table tr");

rows.forEach((row,index)=>{

if(index===0) return;

let text = row.innerText.toLowerCase();

if(category === "all"){
row.style.display="";
}
else{
row.style.display = text.includes(category) ? "" : "none";
}

});

}


// ---------- Order Status ----------

function updateStatus(select){

let status = select.value;

console.log("Order status changed to:", status);

}


// ---------- Admin Dropdown ----------

function toggleMenu(){

let menu = document.getElementById("adminDropdown");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

}


// ---------- Logout ----------

function logout(){

if(confirm("Are you sure you want to logout?")){
window.location.href = "../login.html";
}

}

//always at the bottom of the js
document.addEventListener("DOMContentLoaded", function(){

let firstMenu = document.querySelector(".sidebar li");

if(firstMenu){
loadPage("home", firstMenu);
}

});

//category modal
// open modal
function openCategoryModal(){
document.getElementById("categoryModal").style.display = "flex";
}

// close modal
function closeCategoryModal(){
document.getElementById("categoryModal").style.display = "none";
}

// save category
function saveCategory(){

let name = document.getElementById("categoryName").value;
let description = document.getElementById("categoryDescription").value;
let status = document.getElementById("categoryStatus").value;

if(name === ""){
alert("Please enter category name.");
return;
}

let table = document.getElementById("categoryTable");

if(editingRow){

editingRow.children[1].innerText = name;
editingRow.children[4].innerText = description;
editingRow.querySelector("select").value = status;

alert("Category updated successfully!");

editingRow = null;

}else{

let rowCount = table.rows.length + 1;

let newRow = table.insertRow();

newRow.innerHTML = `
<td>${rowCount}</td>
<td>${name}</td>
<td class="product-count">0</td>

<td>
<select class="status-dropdown" aria-label="Category Status">
<option value="active" ${status === "active" ? "selected" : ""}>Active</option>
<option value="hidden" ${status === "hidden" ? "selected" : ""}>Hidden</option>
</select>
</td>

<td>${description}</td>

<td>
<button class="edit" onclick="editCategory(this)">Edit</button>
<button class="delete" onclick="deleteCategory(this)">Delete</button>
</td>
`;

alert("Category added successfully!");

}

closeCategoryModal();

document.getElementById("categoryName").value = "";
document.getElementById("categoryDescription").value = "";

}

//edit category function
function editCategory(button){

editingRow = button.closest("tr");

let name = editingRow.children[1].innerText;
let description = editingRow.children[4].innerText;
let status = editingRow.querySelector("select").value;

document.getElementById("categoryName").value = name;
document.getElementById("categoryDescription").value = description;
document.getElementById("categoryStatus").value = status;

openCategoryModal();

}

//delete category function
function deleteCategory(button){

let row = button.closest("tr");
let productCell = row.querySelector(".product-count");

if(!productCell){
alert("Product count not found.");
return;
}

let productCount = parseInt(productCell.innerText);

if(productCount > 0){
alert("Cannot delete category because it still contains products.");
return;
}

if(confirm("Are you sure you want to delete this category?")){
row.remove();
}

}

//product count column (category page)
function updateCategoryProductCount(categoryName, change){

let rows = document.querySelectorAll("#categoryTable tr");

rows.forEach(row => {

let categoryCell = row.children[1];

if(categoryCell && categoryCell.innerText.includes(categoryName)){

let countCell = row.querySelector(".product-count");
let count = parseInt(countCell.innerText);

countCell.innerText = count + change;

}

});

}