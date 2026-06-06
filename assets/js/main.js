// let lastScrollY = window.scrollY;
// const navHeader = document.querySelector(".nav-header");

// window.addEventListener("scroll", () => {
//   const currentScrollY = window.scrollY;

//   if (currentScrollY <= 0) {
//     navHeader.classList.remove("nav-hidden");
//     return;
//   }

//   if (currentScrollY > lastScrollY) {
//     // scrolling down
//     navHeader.classList.add("nav-hidden");
//   } else {
//     // scrolling up
//     navHeader.classList.remove("nav-hidden");
//   }

//   lastScrollY = currentScrollY;
// });

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current > lastScroll && current > 100) {
    gsap.to(".nav-header", {
      y: "-100%",
      duration: 0.3,
      ease: "power2.out",
    });
  } else {
    gsap.to(".nav-header", {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  lastScroll = current;
});

gsap.registerPlugin(ScrollTrigger);

const heroTl = gsap.timeline({
  defaults: {
    ease: "power3.out",
  },
});

// Hero Animation
heroTl
  .from(".nav-header", {
    y: -40,
    opacity: 0,
    duration: 0.8,
  })
  .from(
    ".headline",
    {
      y: 80,
      opacity: 0,
      duration: 1,
    },
    "-=0.4",
  )
  .from(
    ".hero-tagline",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.6",
  )
  .from(
    ".hero-cta",
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.4",
  );

// Projects Section
gsap.utils.toArray(".project-item").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    delay: index * 0.1,
    ease: "power3.out",
  });
});

// About Animation
gsap.from(".bio", {
  scrollTrigger: {
    trigger: ".about-bio",
    start: "top 75%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
});
// Hero Animation
