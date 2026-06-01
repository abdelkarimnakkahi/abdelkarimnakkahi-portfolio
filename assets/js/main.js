let lastScrollTop = 0;
// Minimum scroll distance required to trigger change
const minDistance = 10;
const navHeader = document.querySelector(".nav-header");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Ignore scroll changes smaller than minDistance
  if (Math.abs(lastScrollTop - currentScroll) <= minDistance) return;

  if (currentScroll > lastScrollTop && currentScroll > 75) {
    // Scrolling Down
    navHeader.classList.add("show");
  } else {
    // Scrolling Up
    navHeader.classList.remove("show");
  }

  lastScrollTop = currentScroll;
});
