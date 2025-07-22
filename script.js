window.addEventListener('load', () => {
  const header = document.querySelector('header');
  header.style.opacity = '0';
  header.style.transition = 'opacity 1.5s ease-in-out';
  setTimeout(() => {
    header.style.opacity = '1';
  }, 100);
});

