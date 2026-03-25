const heroParallax = document.querySelectorAll('.hero-parallax');
const flowSection = document.getElementById('manifesto-flow') || document.getElementById('act-process');
const systemCards = Array.from(document.querySelectorAll('.system-card')) || Array.from(document.querySelectorAll('.phase-card'));
const revealPanels = document.querySelectorAll('.reveal-block');
const narrativeTag = document.getElementById('narrative-tag');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
);

reveals = Array.from(revealPanels);
reveals.forEach((node) => revealObserver.observe(node));

// Narrative phases and ranges (percent of document)
const phases = [
  { id: 'origen', text: 'PUNTO — ORIGEN', start: 0.00, end: 0.08 },
  { id: 'nacimiento', text: 'EXPANSIÓN — NACIMIENTO', start: 0.08, end: 0.20 },
  { id: 'organizacion', text: 'ORGANIZACIÓN — ESTRUCTURA', start: 0.20, end: 0.40 },
  { id: 'forma', text: 'FORMA — IDENTIDAD', start: 0.40, end: 0.60 },
  { id: 'transformacion', text: 'TRANSFORMACIÓN — SERVICIO', start: 0.60, end: 0.80 },
  { id: 'conexion', text: 'CONEXIÓN — RED', start: 0.80, end: 0.95 },
  { id: 'cierre', text: 'CIERRE — INVITACIÓN', start: 0.95, end: 1.00 }
];

let currentPhase = null;
let pauseUntil = 0;

function clamp(value, min, max) { return Math.min(Math.max(value, min), max); }

function getDocProgress() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
  return docHeight <= 0 ? 0 : clamp(scrollTop / docHeight, 0, 1);
}

function showNarrative(text) {
  narrativeTag.textContent = text;
  narrativeTag.classList.add('is-visible');
  // small pulse
  narrativeTag.style.transform = 'translateX(-50%) translateY(-6px)';
  setTimeout(() => narrativeTag.style.transform = 'translateX(-50%) translateY(0)', 320);
}

function updateNarrative(progress) {
  for (const p of phases) {
    if (progress >= p.start && progress < p.end) {
      if (currentPhase !== p.id) {
        currentPhase = p.id;
        showNarrative(p.text);
        // pause short time on phase entry to create cinematic beat
        pauseUntil = performance.now() + 650; // 650 ms pause on entry (visual pause)
      }
      return;
    }
  }
  // if beyond last
  if (progress >= 0.995) {
    if (currentPhase !== 'cierre') { currentPhase = 'cierre'; showNarrative('CIERRE — INVITACIÓN'); }
  }
}

function updateVisuals() {
  const now = performance.now();
  if (now < pauseUntil) return; // cinematic pause — freeze motion while tag reads

  const progress = getDocProgress();
  updateNarrative(progress);

  // parallax
  const scrollY = window.scrollY;
  heroParallax.forEach((node) => {
    const speed = Number(node.dataset.speed || 0);
    node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });

  // process / phase cards movement
  const rect = (flowSection && flowSection.getBoundingClientRect()) || { top: 0, height: document.body.scrollHeight };
  const total = (rect.height || document.body.scrollHeight) - window.innerHeight;
  const localProgress = total <= 0 ? 0 : clamp(-rect.top / total, 0, 1);

  Array.from(document.querySelectorAll('.phase-card')).forEach((card, index) => {
    const side = index % 2 === 0 ? -1 : 1;
    const driftX = localProgress * (110 + index * 20) * side;
    const driftY = localProgress * (120 + index * 18) * (index < 2 ? -1 : 1);
    const rotate = side * (6 + index * 2) - localProgress * side * 16;
    const scale = 1 - index * 0.03 + localProgress * 0.06;
    const opacity = 1 - Math.abs(localProgress - index * 0.18) * 0.24;
    card.style.transform = `translate3d(${driftX}px, ${driftY}px, 0) rotate(${rotate}deg) scale(${scale})`;
    card.style.opacity = String(clamp(opacity, 0.45, 1));
  });
}

updateVisuals();
window.addEventListener('scroll', updateVisuals, { passive: true });
window.addEventListener('resize', updateVisuals);
