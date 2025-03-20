document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (menu.contains(e.target)) {
      menu.classList.remove("open");
    }
  });
});