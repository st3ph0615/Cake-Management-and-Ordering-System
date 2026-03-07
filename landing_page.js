const galleries = document.querySelectorAll(".product-gallery");

galleries.forEach(gallery => {

  const mainImage = gallery.querySelector(".mainImage");
  const thumbs = gallery.querySelectorAll(".thumb");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {

      mainImage.src = thumb.src;

      thumbs.forEach(t => t.classList.remove("active"));

      thumb.classList.add("active");

    });
  });

});

//scrollbar
const scrollContainer = document.getElementById("productScroll");

document.querySelector(".scroll-btn.left").addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -350,
        behavior: "smooth"
    });
});

document.querySelector(".scroll-btn.right").addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: 350,
        behavior: "smooth"
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if(scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){
link.classList.add("active");
}

});

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});

// PAGE FADE IN
window.addEventListener("load", () => {
document.body.classList.add("page-loaded");
});