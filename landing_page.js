const galleries = document.querySelectorAll(".product-gallery");

galleries.forEach(gallery => {

const mainImage = gallery.querySelector(".mainImage");
const thumbs = gallery.querySelectorAll(".thumb");

thumbs.forEach(thumb => {

thumb.addEventListener("click", ()=>{

mainImage.src = thumb.src;

thumbs.forEach(t => t.classList.remove("active"));
thumb.classList.add("active");

});

});

});