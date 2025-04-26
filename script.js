// Detecta o scroll para alterar a classe da navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Controla o menu hamburger no mobile
const navToggle = document.getElementById('nav-toggle');
const navList   = document.querySelector('.nav-right ul');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  // ADICIONADO: Animação do ícone hamburger (opcional)
  navToggle.classList.toggle('active');
});

// ADICIONADO: Fecha o menu se clicar em um link (útil no mobile)
const navLinks = document.querySelectorAll('.nav-right ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
});

// ADICIONADO: Fecha o menu se clicar fora dele (opcional)
document.addEventListener('click', (event) => {
    const isClickInsideNav = navbar.contains(event.target);
    if (!isClickInsideNav && navList.classList.contains('active')) {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
    }
});