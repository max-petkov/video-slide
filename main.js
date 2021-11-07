// Splidejs
document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide("#videoSlide", {
    pagination: false,
    classes: {
      arrows: "splide__arrows container-custom-arrows",
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

  splide.on("active", function (e) {
    const arrows = document.querySelector(".container-custom-arrows");
    const left = Math.floor(
      e.slide.firstElementChild.getBoundingClientRect().left
    );

    const bottom = e;
    console.log(bottom.slide.getBoundingClientRect());

    if (window.innerWidth >= 768)
      arrows.style.left = `${Math.ceil(left / 15) * 15 - 16}px`;
  });

  splide.mount();
});
