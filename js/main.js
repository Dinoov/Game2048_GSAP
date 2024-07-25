// Підключення ScrollTrigger та ScrollSmoother з GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Налаштування ScrollSmoother для плавності прокрутки
ScrollSmoother.create({
  wrapper: ".wrapper", // Селектор контейнера прокрутки
  content: ".content", // Селектор вмісту, що прокручується
  smooth: 1.5, // Параметр плавності прокрутки
  effects: true, // Включення плавних ефектів
});

// Анімація зникнення заголовка при прокрутці
gsap.fromTo(
  ".top_header",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".top_header", // Тригер для запуску анімації
      start: "center", // Початок анімації при прокрутці до центру елемента
      end: "900", // Кінець анімації при прокрутці до 900 пікселів
      scrub: true, // Плавне згладжування анімації
    },
  }
);

// Анімація з'явлення елементів у лівому стовпці при прокрутці
let itemsL = gsap.utils.toArray(
  ".left__column .flex-item, .left__column .text_h2, .left__column .flex-img"
);

itemsL.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -80 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item, // Тригер для запуску анімації
        start: "-850", // Початок анімації при прокрутці до -850 пікселів
        end: "-100", // Кінець анімації при прокрутці до -100 пікселів
        scrub: true, // Плавне згладжування анімації
      },
    }
  );
});

// Анімація з'явлення елементів у правому стовпці при прокрутці
let itemsR = gsap.utils.toArray(
  ".right__column .flex-item, .right__column .text_h2, .right__column .flex-img, .right__column .flex-img-2 "
);

itemsR.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 80 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item, // Тригер для запуску анімації
        start: "-750", // Початок анімації при прокрутці до -750 пікселів
        end: "top", // Кінець анімації при прокрутці до верху екрану
        scrub: true, // Плавне згладжування анімації
      },
    }
  );
});

// Анімація з'явлення кнопки "спробуй себе" у футері при прокрутці
gsap.fromTo(
  ".footer .ppp",
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".footer", // Тригер для запуску анімації
      start: "top 100%", // Початок анімації при прокрутці до верху екрану на 100%
      end: "bottom 50%", // Кінець анімації при прокрутці до нижньої половини екрану
      scrub: true, // Плавне згладжування анімації
    },
  }
);

// Видалення елементу завантаження після завантаження сторінки
let loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.classList.add("hide"); // Додання класу для зникнення
  setTimeout(() => {
    loader.parentElement.remove(); // Видалення батьківського елементу через певний час
  }, 600);
});
