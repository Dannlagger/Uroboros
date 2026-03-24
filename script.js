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
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  }
);

reveals.forEach((element) => {
  if (!element.classList.contains('is-visible')) {
    observer.observe(element);
  }
});
