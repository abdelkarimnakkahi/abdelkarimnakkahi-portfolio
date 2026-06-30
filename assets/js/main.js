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
gsap.from(".about-wrapper", {
  scrollTrigger: {
    trigger: ".about-wrapper",
    start: "top 75%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
});

// Skills Animation
gsap.from(".skills-category", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 70%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.12,
  duration: 0.8,
  ease: "power3.out",
});

// Why ME Animation
gsap.utils.toArray(".why-me-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },

    x: index % 2 === 0 ? -80 : 80,
    y: 50,
    opacity: 0,
    rotateZ: index % 2 === 0 ? -2 : 2,

    duration: 1.2,
    ease: "power4.out",
  });
});

// Contact Animition
gsap.from(".contact h2", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },

  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

gsap.from(".contact p", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },

  y: 40,
  opacity: 0,
  delay: 0.2,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".btn-contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },

  scale: 0.8,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  ease: "back.out(1.7)",
});

// Contact form handling
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(contactForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // Success handling
      formStatus.textContent =
        "Message sent successfully! I'll get back to you soon.";
      formStatus.className = "status-success";
      contactForm.reset();
    })
    .catch((error) => {
      // Error handling
      formStatus.textContent = "Oops! There was an issue sending your message.";
      formStatus.className = "status-error";
    });
});
