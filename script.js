const elementoGalleria = document.querySelector("#galleria-sedi");

if (elementoGalleria && typeof Swiper !== "undefined") {
  new Swiper(elementoGalleria, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    navigation: {
      nextEl: ".galleria-successiva",
      prevEl: ".galleria-precedente"
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  });
}