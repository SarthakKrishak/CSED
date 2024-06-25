const lenis = new Lenis({
  smooth: true,
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function for smoothness
});

lenis.on("scroll", (e) => {
  ScrollTrigger.update();
});

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

function backgrd() {
  VANTA.GLOBE({
    el: ".page1",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 0.9,
    scaleMobile: 1.0,
    color: 0xff2a2a,
    backgroundColor: 0x181818,
  });
}
backgrd();

function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow", {
    top: "-110%",
    delay: 0.08,
    duration: 0.9,
    ease: "expo-out",
  });

  tl.to(".loader", {
    top: "-110%",
    delay: 0.6,
    duration: 1,
    ease: "expo-out",
  });
}
loading();

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  const hoverElements = document.querySelectorAll(".main");

  hoverElements.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      cursor.style.opacity = 1;
    });

    el.addEventListener("mouseleave", function () {
      cursor.style.opacity = 0;
    });
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuButton = document.getElementById("menu-toggle-button");

  if (menu.style.display === "flex") {
    menu.style.animation = "slideOutToTop 0.5s ease forwards";

    menu.addEventListener(
      "animationend",
      () => {
        if (menu.style.animationName === "slideOutToTop") {
          menu.style.display = "none";
          menuButton.textContent = "Menu";
        }
      },
      { once: true }
    );
  } else {
    menu.style.display = "flex";
    menu.style.animation = "slideInFromTop 0.7s ease forwards";
    menuButton.textContent = "Close";
  }
}

var elems = document.querySelectorAll(".elem");
var pg2 = document.querySelectorAll(".page4");
var txts = document.querySelectorAll(".page4 h2");
var blr = document.querySelector(".page4 .bg-opacity");

elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgimg = ele.getAttribute("data-img");
    pg2.forEach(function (page) {
      page.style.backgroundImage = `url(${bgimg})`;
    });

    // Change the color of h2 elements
    txts.forEach(function (txt) {
      txt.style.color = "white";
    });

    // Display the blur element
    if (blr) {
      blr.style.display = "flex";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(
    ".page3-left .page3-left-bottom .counter"
  );
  const duration = 2000;

  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = "0+";
      let target = +counter.dataset.count;
      let increment = target / (duration / 16);

      function countIt() {
        let displayedCount = parseInt(counter.innerText);
        if (displayedCount < target) {
          counter.innerText = Math.ceil(displayedCount + increment) + "+";
          if (parseInt(counter.innerText) > target) {
            counter.innerText = target + "+";
          }
          requestAnimationFrame(countIt);
        } else {
          counter.innerText = target + "+";
        }
      }

      countIt();
    });
  }

  ScrollTrigger.create({
    trigger: ".page3-left",
    start: "20%",
    end: "90%",
    onEnter: runCounter,
    // markers: true,
  });
});

function foot() {
  gsap.from(".n1", {
    y: "-100%",
    delay: 0.1,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".part2",
      scroller: "body",
      start: "bottom 80%",
      markers: true,
    },
  });

  gsap.from(".n2", {
    y: "-100%",
    delay: 0.4,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".part2",
      scroller: "body",
      start: "bottom 80%",
      markers: true,
    },
  });

  gsap.from(".n3", {
    y: "-100%",
    delay: 0.6,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".part2",
      scroller: "body",
      start: "bottom 80%",
      markers: true,
    },
  });

  gsap.from(".n4", {
    y: "-100%",
    delay: 0.8,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".part2",
      scroller: "body",
      start: "bottom 80%",
      markers: true,
    },
  });
}
foot();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "18% 50%",
    end: "90% 50%",
    // markers: true,
    scrub: 1,
  },
});

tl.to(".page2-cont-fill h1", {
  width: "100%",
  duration: 1.8,
});

tl.to(".page2-cont-fill h2", {
  width: "100%",
  duration: 2,
});
tl.to(".page2-cont-fill h3", {
  width: "100%",
  duration: 2.5,
});
tl.to(".page2-cont-fill h4", {
  width: "100%",
  duration: 2.8,
});
tl.to(".page2-cont-fill h5", {
  width: "100%",
  duration: 3,
});

ScrollTrigger.create({
  trigger: ".page2",
  start: "18% 50%",
  end: "90% 50%",
  // markers: true,
  scrub: 1,
  onUpdate: (self) => {
    let rotation = 360 * self.progress;
    gsap.to(".page2-head .page2-head1 img", {
      rotation: rotation,
      ease: "linear",
      overwrite: "auto",
    });
  },
});

const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=3000",
    // markers: true,
  },
});

sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");

  if (text.length === 0) return;

  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      // markers: true,
    },
  });
});

var slides = document.querySelectorAll(".slider");
var btns = document.querySelectorAll(".btn");
let currentSlide = 0;

var manualNav = function (manual) {
  slides.forEach((slider) => {
    slider.classList.remove("active");
  });

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function () {
  let i = currentSlide;

  var repeater = () => {
    setTimeout(function () {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;
      if (i >= slides.length) {
        i = 0;
      }

      repeater();
    }, 1000);
  };

  repeater();
};

repeat();

var b = document.querySelector(
  ".page1 .landing-footer .landing-footer-left .btn button"
);
var ic = document.querySelector(
  ".page1 .landing-footer .landing-footer-left .btn i"
);

b.addEventListener("mouseenter", function () {
  ic.style.rotate = "45deg";
});
b.addEventListener("mouseleave", function () {
  ic.style.rotate = "0deg";
});

function teams() {
/* // Carousel Auto-Cycle
$(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
 */
  var btn2024 = document.getElementById("btn2023");
  var btn2023 = document.getElementById("btn2024");
  var body2 = document.getElementById("body2");
  var body3 = document.getElementById("body3");
  btn2024.addEventListener("click", () => {
    body2.style.display = "block";
    body3.style.display = "none";
  });

  btn2023.addEventListener("click", () => {
    body2.style.display = "none";
    body3.style.display = "block";
  });

  const btnElList = document.querySelectorAll(".btnew");

  btnElList.forEach((btnEl) => {
    btnEl.addEventListener("click", () => {
      document.querySelector(".special")?.classList.remove("special");
      btnEl.classList.add("special");
    });
  });
}
teams();

function faqq() {
  gsap.ticker.lagSmoothing(0);

  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
}
faqq();

function blogss() {
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}
blogss();
