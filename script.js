const tiltCard = document.getElementById("tiltCard");

tiltCard.addEventListener("mousemove", (e) => {
  const rect = tiltCard.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
});

tiltCard.addEventListener("mouseleave", () => {
  tiltCard.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
});
