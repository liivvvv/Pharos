// Detecta o scroll para alterar a classe da navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  // Pequeno ajuste para navbar ficar transparente um pouco antes
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Controla o menu hamburger no mobile
const navToggle = document.getElementById('nav-toggle');
const navList   = document.querySelector('.nav-right ul');
// Seleciona a navbar inteira para verificar cliques fora
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', (event) => {
  // Impede que o clique no toggle propague para o document listener abaixo
  event.stopPropagation();
  navList.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Fecha o menu se clicar em um link
const navLinks = document.querySelectorAll('.nav-right ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
});

// Fecha o menu se clicar fora da área da navbar
document.addEventListener('click', (event) => {
    // Verifica se o clique foi fora da navbar E se o menu está ativo
    const isClickInsideNav = navbar.contains(event.target);
    if (!isClickInsideNav && navList.classList.contains('active')) {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
    }
});