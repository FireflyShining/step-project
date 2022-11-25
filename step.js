"use strict";

let tab = function () {
  let tabBtn = document.querySelectorAll(".service-item");
  let tabContent = document.querySelectorAll(".service-desc");
  let tabName;

  tabBtn.forEach((el) => {
    el.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabBtn.forEach((el) => {
      el.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("data-tab");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((el) => {
      el.classList.contains(tabName)
        ? el.classList.add("active")
        : el.classList.remove("active");
    });
  }
};
tab();

function loading() {
  const img = document.querySelectorAll(".all");
  const loadMore = document.querySelector(".load");

  for (let i = 12; i < img.length; i++) {
    img[i].classList.add('hide');
  }
  let countD = 12;
  loadMore.addEventListener("click", function () {
    countD += 12;
    if (12 <= img.length) {
      for (let i = 12; i < img.length; i++) {
        img[i].classList.remove('hide');
      }
    }
    loadMore.remove();
  });
}
loading();

function app() {
  const filterBtn = document.querySelectorAll(".work_tab");
  const img = document.querySelectorAll(".all");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = item.classList.contains(category);
      if (!isItemFiltered) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }
  
  filterBtn.forEach((el) => {
    el.addEventListener("click", () => {
      filter(el.dataset.filter, img);
    });
  });
}
app();

let viewport = document.getElementById("viewport").clientWidth;
let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");

let viewSlide = 0;

btnNext.addEventListener("click", function () {
  viewSlide = viewSlide < (viewSliders.length - 1) ? ++viewSlide : 0;

  slider.style.left = -viewSlide * viewport + "px";
  thumbnailsChanger(viewSlide)
});

btnPrev.addEventListener("click", function () {
  viewSlide = viewSlide > 0 ? --viewSlide : (viewSliders.length - 1);

  slider.style.left = -viewSlide * viewport + "px";
  thumbnailsChanger(viewSlide)
});

viewSliders.forEach(slide => { slide.addEventListener("click", function (e) {
    let slideTo = e.target.closest('.viewSlide').dataset.slide.split('-').pop()
    viewSlide = --slideTo;

    slider.style.left = -viewSlide * viewport + "px";
    thumbnailsChanger(viewSlide)
  })
})

const thumbnailsChanger = (counter) => {
  document.querySelector('.viewSlide.active').classList.remove('active')
  document.querySelector(`.viewSlide[data-slide="slide-${++counter}"]`).classList.add('active')
}

let elem = document.querySelector('.grid');
let msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid_item',
  columnWidth: 380,
  gutter: 10,
  horizontalOrder: true
});
