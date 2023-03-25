const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  // burger
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // toggle
    burger.classList.toggle("toggle");
  });
};
navSlide();
