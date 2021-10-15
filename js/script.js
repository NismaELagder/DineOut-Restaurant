window.onload = function () {
  AOS.init();
};

const toggler = document.querySelector(".nav-toggler");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header-section");
const links = document.getElementsByClassName("link-item");
const arrOfLinks = [...links];
const menuList = document.querySelector(".list-items");
const arrOfMenuList = [...menuList.children];

function navToggling() {
  nav.classList.toggle("shown");
  toggler.classList.toggle("active");
}

toggler.onclick = navToggling;

// when clicking any link close the nav list

for (link of links) {
  link.onclick = navToggling;
}

// behavior of navbar during scrolling

window.onscroll = function () {
  if (window.scrollY > 55) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

/* ---------------------------- 
translating between menuList items
 ---------------------- */

const mealTitle = document.querySelectorAll(".meal-title");

arrOfMenuList.forEach((item) => {
  item.addEventListener("click", conversion);
});

function conversion(e) {
  if (e.target.classList.contains("active-category") == false) {
    e.target.classList.add("active-category");

    mealTitle.forEach(
      (elem) => (elem.textContent = e.target.getAttribute("data-target"))
    );

    for (el of arrOfMenuList) {
      if (el != e.target) {
        el.classList.remove("active-category");
      }
    }
  }
}
