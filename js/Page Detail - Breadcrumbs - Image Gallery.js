const mainThumbnail = document.querySelector(
  ".product--detail .thumbnail .main-image img"
);

const mainVideo = document.querySelector(
  ".product--detail .thumbnail .main-image iframe"
);

const smallImages = document.querySelectorAll(
  ".product--detail .thumbnail .small-images .img .small-image"
);

const videoImageBtn = document.querySelector(
  ".product--detail .thumbnail .small-images .img #img-play-btn"
);

const smallPrevIcon = document.querySelector(
  ".product--detail .thumbnail .carousel-arrows .small-arr-left"
);

const smallNextIcon = document.querySelector(
  ".product--detail .thumbnail .carousel-arrows .small-arr-right"
);

const smallImagesContainer = document.querySelector(
    ".product--detail .thumbnail .small-images-container"
  );

smallImages.forEach((img) => {
  img.addEventListener("click", () => {
    mainThumbnail.style.display = "block";
    mainVideo.style.display = "none";
    mainThumbnail.src = img.src;
    mainVideo.src = '';
  });
});

videoImageBtn.addEventListener("click", () => {
  mainVideo.style.display = "block";
  mainVideo.src = videoImageBtn.parentElement.querySelector("iframe").src;
  mainThumbnail.style.display = "none";
})

smallNextIcon.addEventListener("click", () => {
    const scrollWidth = document.querySelector(
        ".product--detail .thumbnail .small-images .img"
      ).offsetWidth;
    smallImagesContainer.scrollLeft += scrollWidth;
})

smallPrevIcon.addEventListener("click", () => {
    const scrollWidth = document.querySelector(
        ".product--detail .thumbnail .small-images .img"
      ).offsetWidth;
    smallImagesContainer.scrollLeft -= scrollWidth;
})