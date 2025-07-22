window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll("section, .project-card, .badge, footer");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - 150) {
      reveals[i].classList.add("visible");
    }
  }
});
