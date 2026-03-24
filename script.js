const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px'
  }
);

reveals.forEach((element) => observer.observe(element));

const orbs = document.querySelectorAll('.orb');
window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  orbs.forEach((orb, index) => {
    const factor = index === 0 ? 0.08 : -0.06;
    orb.style.transform = `translateY(${offset * factor}px)`;
  });
}, { passive: true });
