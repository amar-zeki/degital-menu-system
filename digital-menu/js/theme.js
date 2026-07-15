document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  setTheme(currentTheme);

  themeToggle.addEventListener('click', () => {
    const activeTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    setTheme(activeTheme);
  });
});

function setTheme(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    if (themeToggle) {
      themeToggle.innerHTML = '🌙'; // Icon for switching back to dark
      themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    if (themeToggle) {
      themeToggle.innerHTML = '☀️'; // Icon for switching to light
      themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }
  localStorage.setItem('theme', theme);
  
  // Trigger custom event for components that might want to react to theme change
  window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
}
