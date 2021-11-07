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

  splide.on("arrows:updated", function () {
    const arrow = document.querySelectorAll(".custom-video-arrow");

    arrow.forEach((arrow) => {
      if (arrow.hasAttribute("disabled"))
        arrow.classList.add("custom-video-arrow--disabled");
      else arrow.classList.remove("custom-video-arrow--disabled");
    });
  });

  if (window.innerWidth >= 768) {
    splide.on("visible", function (e) {
      const arrows = document.querySelector(".custom-video-arrows");
      const left = Math.floor(
        e.slide.firstElementChild.getBoundingClientRect().left
      );

      arrows.style.left = `${Math.ceil(left / 15) * 15 - 16}px`;
    });
  }

  splide.mount();
});
