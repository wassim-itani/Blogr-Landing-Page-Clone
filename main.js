const navToggler = document.querySelector(".nav-toggler");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuTop = document.querySelector(".mobile-menu-top");

const toggleMenu = () => {
  const isOpened = navToggler.classList.toggle("active");
  if (isOpened) {
    navToggler.setAttribute("src", "images/icon-close.svg");
  } else {
    navToggler.setAttribute("src", "images/icon-hamburger.svg");
  }
  mobileMenu.classList.toggle("active");
};

navToggler.addEventListener("click", toggleMenu);

const revealDropdown = (e) => {
  if (e.target.classList.contains("mobile-menu-item")) {
    const children = [...e.currentTarget.children];
    const activeChild = children.filter((item) =>
      item.classList.contains("active")
    )[0];

    if (activeChild && activeChild !== e.target) {
      activeChild.classList.remove("active");
    }
    e.target.classList.toggle("active");
  }
};

mobileMenuTop.addEventListener("click", revealDropdown);
