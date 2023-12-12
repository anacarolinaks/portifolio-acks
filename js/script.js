const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

function fecharMenu() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
  btnMobile.setAttribute('aria-expanded', false);
  btnMobile.setAttribute('aria-label', 'Abrir Menu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

document.querySelectorAll('.menu-item').forEach(function(item) {
  item.addEventListener('click', function() {
    fecharMenu();
  });
});