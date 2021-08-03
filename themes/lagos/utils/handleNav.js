export default function handleNav() {
  if (typeof window !== "undefined") {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    //open
    if (burger.length && menu.length) {
      burger[0].addEventListener("click", function () {
        menu[0].classList.toggle("hidden");
        burger[0].classList.toggle("hidden");
      });
    }

    // close
    if (close.length) {
      close[0].addEventListener("click", function () {
        menu[0].classList.toggle("hidden");
        burger[0].classList.toggle("hidden");
      });
    }
    if (backdrop.length) {
      backdrop[0].addEventListener("click", function () {
        menu[0].classList.toggle("hidden");
        burger[0].classList.toggle("hidden");
      });
    }
  }
}
