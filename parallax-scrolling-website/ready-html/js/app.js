// Получаем значение вертикального скролла
window.addEventListener("scroll", (e) => {
  // оператор "+" говорит о том что мы добавляем
  // к имеющимся стилям еще стили
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

//Регистрируем библиотеки

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//Создаем плавный скролл
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
