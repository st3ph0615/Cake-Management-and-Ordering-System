const galleries = document.querySelectorAll(".product-gallery");

galleries.forEach(gallery => {

  const mainImage = gallery.querySelector(".mainImage");
  const thumbs = gallery.querySelectorAll(".thumb");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {

      // change the main image
      mainImage.src = thumb.src;

      // remove active border from others
      thumbs.forEach(t => t.classList.remove("active"));

      // add active to clicked
      thumb.classList.add("active");

    });
  });
//scrollbar
});

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