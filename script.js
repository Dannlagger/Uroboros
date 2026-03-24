const parallaxNodes = document.querySelectorAll('.parallax');
const stickySection = document.getElementById('showcase');
const cards = Array.from(document.querySelectorAll('.floating-card'));
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
);

reveals.forEach((node) => revealObserver.observe(node));

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScene() {
  const scrollY = window.scrollY;

  parallaxNodes.forEach((node) => {
    const speed = Number(node.dataset.speed || 0);
    node.style.transform = `translateY(${scrollY * speed}px)`;
  });

  const rect = stickySection.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const progress = clamp(-rect.top / total, 0, 1);

  cards.forEach((card, index) => {
    const offset = index - 1;
    const driftY = (progress * 160) - index * 22;
    const driftX = progress * offset * 120;
    const scale = 1 - Math.abs(offset) * 0.06 + progress * 0.04;
    const rotate = offset * 10 - progress * offset * 18;
    const opacity = 1 - Math.abs(progress - index * 0.28) * 0.38;

    card.style.transform = `translate3d(${driftX}px, ${driftY}px, 0) rotate(${rotate}deg) scale(${scale})`;
    card.style.opacity = String(clamp(opacity, 0.35, 1));
  });
}

updateScene();
window.addEventListener('scroll', updateScene, { passive: true });
window.addEventListener('resize', updateScene);
