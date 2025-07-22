// 🌸 Reveal on scroll
const sections = document.querySelectorAll("section, .project-card");
const revealOnScroll = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      sec.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// 💐 Burst Flowers on Hover
const targets = document.querySelectorAll(".project-card, header");
const flowerSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Iconic_flower.svg/1024px-Iconic_flower.svg.png";

targets.forEach(target => {
  target.addEventListener("mouseenter", () => {
    for (let i = 0; i < 25; i++) {
      const flower = document.createElement("img");
      flower.src = flowerSrc;
      flower.className = "flower-burst";
      flower.style.top = `${Math.random() * window.innerHeight}px`;
      flower.style.left = `${Math.random() * window.innerWidth}px`;
      document.body.appendChild(flower);

      setTimeout(() => flower.remove(), 1500);
    }
  });
});
