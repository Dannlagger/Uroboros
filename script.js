const parallaxNodes = document.querySelectorAll('.parallax');
const sequence = document.querySelector('.sequence');
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
    node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });

  const rect = sequence.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const progress = clamp(-rect.top / total, 0, 1);

  cards.forEach((card, index) => {
    const offset = index - 1;
    const driftY = progress * 220 - index * 26;
    const driftX = progress * offset * 160;
    const scale = 1 - Math.abs(offset) * 0.08 + progress * 0.1;
    const rotate = offset * 14 - progress * offset * 30;
    const opacity = 1 - Math.abs(progress - index * 0.28) * 0.42;
    const blur = Math.abs(offset) * (1 - progress) * 1.2;

    card.style.translate = `${driftX}px ${driftY}px`;
    card.style.rotate = `${rotate}deg`;
    card.style.scale = `${scale}`;
    card.style.opacity = String(clamp(opacity, 0.28, 1));
    card.style.filter = `blur(${blur}px)`;
  });
}

updateScene();
window.addEventListener('scroll', updateScene, { passive: true });
window.addEventListener('resize', updateScene);
