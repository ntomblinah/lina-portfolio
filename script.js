window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(
    "section, .project-card, .badge, footer"
  );

  for (let i = 0; i < elements.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = elements[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      elements[i].classList.add("visible");
    }
  }
});
