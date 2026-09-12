const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mainNav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelector('#year').textContent = new Date().getFullYear();

function comingSoon(event, name) {
  event.preventDefault();
  alert(name + " : cette rubrique sera ajoutée prochainement. Tu pourras remplacer ce lien par ton PDF, ta vidéo ou ta page.");
}
