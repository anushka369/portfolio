const body = document.body;
const themeCheckbox = document.getElementById('theme-checkbox');
const themeIcon = document.getElementById('theme-icon');
const desktopThemeToggle = document.getElementById('desktop-theme-toggle');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

/* Theme Toggle Functions */
function toggleTheme() {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  const isDark = body.classList.contains("dark");
  
  // Update mobile slider
  if (themeIcon) themeIcon.textContent = isDark ? "🔆" : "🌙";
  if (themeCheckbox) themeCheckbox.checked = isDark;
  
  // Update desktop button
  if (desktopThemeToggle) desktopThemeToggle.textContent = isDark ? "🔆" : "🌙";
}

/* Theme Toggle Event Listeners */
if (themeCheckbox) {
  themeCheckbox.addEventListener("change", toggleTheme);
}

if (desktopThemeToggle) {
  desktopThemeToggle.addEventListener("click", toggleTheme);
}

// Initialize theme icons based on current theme
const isDark = body.classList.contains("dark");
if (themeIcon) themeIcon.textContent = isDark ? "🔆" : "🌙";
if (themeCheckbox) themeCheckbox.checked = isDark;
if (desktopThemeToggle) desktopThemeToggle.textContent = isDark ? "🔆" : "🌙";

/* Mobile Navigation */
function openSidebar() {
  navLinks.classList.add('show');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
  navLinks.classList.remove('show');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  overlay.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners
hamburgerBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking on navigation links (mobile)
const navLinkItems = document.querySelectorAll('.nav-links a');
const logoLink = document.querySelector('.logo a'); // Add logo link

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  });
});

// Close sidebar when clicking logo on mobile
if (logoLink) {
  logoLink.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  });
}

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeSidebar();
    navLinks.classList.remove('show');
  }
});

// Close sidebar on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('show')) {
    closeSidebar();
  }
});