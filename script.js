const body = document.body;
const toggle = document.querySelector(".theme-toggle");
const floatingContainer = document.querySelector(".floating-container");

/* Theme Toggle */
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("dark") ? "🔆" : "🌙";
});

// /* Floating bows & hearts */
// const symbols = ["🎀", "💗", "💖", "🩰"];

// function createFloating() {
//   const span = document.createElement("span");
//   span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
//   span.style.left = Math.random() * 100 + "vw";
//   span.style.animationDuration = 8 + Math.random() * 6 + "s";
//   span.classList.add("floating");

//   floatingContainer.appendChild(span);

//   setTimeout(() => span.remove(), 14000);
// }

// setInterval(createFloating, 800);
