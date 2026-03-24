const heroParallax = document.querySelectorAll('.hero-parallax');
const flowSection = document.getElementById('manifesto-flow');
const systemCards = Array.from(document.querySelectorAll('.system-card'));
const revealPanels = document.querySelectorAll('.reveal-panel');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
);

revealPanels.forEach((panel) => revealObserver.observe(panel));

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateExperience() {
  const scrollY = window.scrollY;

  heroParallax.forEach((node) => {
    const speed = Number(node.dataset.speed || 0);
    node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });

  const rect = flowSection.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const progress = clamp(-rect.top / total, 0, 1);

  systemCards.forEach((card, index) => {
    const row = index < 2 ? -1 : 1;
    const side = index % 2 === 0 ? -1 : 1;
    const driftY = progress * (120 + index * 28) * row * -1;
    const driftX = progress * (110 + index * 24) * side;
    const scale = 1 - index * 0.03 + progress * 0.08;
    const rotate = side * (6 + index * 2) - progress * side * 18;
    const opacity = 1 - Math.abs(progress - index * 0.18) * 0.25;
    const blur = Math.abs(0.5 - progress) * index * 0.7;

    card.style.transform = `translate3d(${driftX}px, ${driftY}px, 0) rotate(${rotate}deg) scale(${scale})`;
    card.style.opacity = String(clamp(opacity, 0.45, 1));
    card.style.filter = `blur(${blur}px)`;
  });
}

updateExperience();
window.addEventListener('scroll', updateExperience, { passive: true });
window.addEventListener('resize', updateExperience);
