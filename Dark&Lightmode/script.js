const switchToggle = document.querySelector('input[type="checkbox" ]');
const text = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
function switchMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}
function darkMode() {
  text.children[0].textContent = 'Dark mode';
  text.children[1].classList.replace('fa-sun', 'fa-moon');
}
function lightMode() {
  text.children[0].textContent = 'Light mode';
  text.children[1].classList.replace('fa-moon', 'fa-sun');
}
switchToggle.addEventListener('change', switchMode);
