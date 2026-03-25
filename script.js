const lightCore = document.getElementById('light-core');
const logoShell = document.getElementById('logo-shell');
const introCopy = document.querySelector('.intro-copy');
const processSection = document.getElementById('act-process');
const phaseCards = Array.from(document.querySelectorAll('.phase-card'));
const revealBlocks = document.querySelectorAll('.reveal-block');
const heroParallax = document.querySelectorAll('.hero-parallax');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
);

revealBlocks.forEach((block) => revealObserver.observe(block));

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateIntro() {
  const max = window.innerHeight * 1.2;
  const progress = clamp(window.scrollY / max, 0, 1);
  const scale = 1 + progress * 30;
  const opacity = clamp(progress * 1.4, 0, 1);
  const textOpacity = clamp((progress - 0.25) * 2.2, 0, 1);

  lightCore.style.transform = `translate(-50%, -50%) scale(${scale})`;
  lightCore.style.opacity = String(1 - progress * 0.28);
  logoShell.style.opacity = String(opacity);
  introCopy.style.opacity = String(textOpacity);
  introCopy.style.transform = `translateY(${(1 - textOpacity) * 20}px)`;
}

function updateProcess() {
  const rect = processSection.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const progress = clamp(-rect.top / total, 0, 1);

  phaseCards.forEach((card, index) => {
    const side = index % 2 === 0 ? -1 : 1;
    const row = index < 2 ? -1 : 1;
    const driftX = progress * (110 + index * 20) * side;
    const driftY = progress * (140 + index * 18) * row * -1;
    const scale = 1 - index * 0.03 + progress * 0.08;
    const rotate = side * (7 + index * 2) - progress * side * 16;
    const opacity = 1 - Math.abs(progress - index * 0.15) * 0.24;
    const blur = Math.abs(0.5 - progress) * index * 0.6;

    card.style.transform = `translate3d(${driftX}px, ${driftY}px, 0) rotate(${rotate}deg) scale(${scale})`;
    card.style.opacity = String(clamp(opacity, 0.5, 1));
    card.style.filter = `blur(${blur}px)`;
  });
}

function updateParallax() {
  const scrollY = window.scrollY;
  heroParallax.forEach((node) => {
    const speed = Number(node.dataset.speed || 0);
    node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });
}

function updateAll() {
  updateIntro();
  updateProcess();
  updateParallax();
}

updateAll();
window.addEventListener('scroll', updateAll, { passive: true });
window.addEventListener('resize', updateAll);
