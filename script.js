const body = document.body;
const themeCheckbox = document.getElementById('theme-checkbox');
const themeIcon = document.getElementById('theme-icon');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

/* Theme Toggle */
themeCheckbox.addEventListener("change", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  themeIcon.textContent = body.classList.contains("dark") ? "🔆" : "🌙";
  themeCheckbox.checked = body.classList.contains("dark");
});

// Initialize theme icon based on current theme
themeIcon.textContent = body.classList.contains("dark") ? "🔆" : "🌙";
themeCheckbox.checked = body.classList.contains("dark");

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