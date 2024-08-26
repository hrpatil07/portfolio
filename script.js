function toggleMenu() {
  const menu = document.querySelector('.hamburger-menu');
  menu.classList.toggle('active');
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const themeToggle = document.querySelector('.theme-toggle');
  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = '🌕';
  } else {
    themeToggle.textContent = '🌙';
  }
}
