// Detecta o scroll para alterar a transparência da navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Opcional: Se quiser adicionar funcionalidade para a navbar responsiva (menu hamburguer)
  // Exemplo básico para alternar classe "active" no menu (caso você crie um botão para isso):
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const navList = document.querySelector('.nav-right ul');
      navList.classList.toggle('active');
    });
  }  