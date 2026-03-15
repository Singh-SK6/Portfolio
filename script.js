
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    const offsetTop = target.offsetTop - 80;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});
