const coords = document.getElementById("coSouris");

document.addEventListener("mousemove", (event) => {
  coords.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});