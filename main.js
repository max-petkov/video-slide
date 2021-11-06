// Splidejs
document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide("#videoSlide", {
    pagination: false,
    classes: {
      arrows: "splide__arrows custom-video-arrows",
      arrow: "splide__arrow custom-video-arrow",
      prev: "splide__arrow--prev custom-video-arrow--left",
      next: "splide__arrow--next custom-video-arrow--right",
    },
  });

  splide.on("arrows:updated", function (e) {
    const arrow = document.querySelectorAll(".custom-video-arrow");
    arrow.forEach((arrow) => {
      if (arrow.hasAttribute("disabled"))
        arrow.classList.add("custom-video-arrow--in-active");
      else arrow.classList.remove("custom-video-arrow--in-active");
    });
  });

  splide.mount();
});
