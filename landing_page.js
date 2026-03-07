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