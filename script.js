const items = Array.from(document.querySelectorAll('.menu__item'));
const screens = Array.from(document.querySelectorAll('.screen'));

let activeIndex = 0;

function render() {
  const activeItem = items[activeIndex];
  const screenId = activeItem.dataset.screen;

  items.forEach((item, index) => {
    item.classList.toggle('is-active', index === activeIndex);
  });

  screens.forEach((screen) => {
    screen.classList.toggle('is-visible', screen.dataset.screen === screenId);
  });
}

function move(delta) {
  activeIndex = (activeIndex + delta + items.length) % items.length;
  render();
}

function activateCurrent() {
  const current = items[activeIndex];
  current.animate(
    [
      { transform: 'translateX(8px) scale(1.03)' },
      { transform: 'translateX(16px) scale(1.06)' },
      { transform: 'translateX(8px) scale(1.03)' }
    ],
    {
      duration: 220,
      easing: 'ease-out'
    }
  );
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    move(-1);
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    move(1);
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    activateCurrent();
  }
});

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeIndex = index;
    render();
    activateCurrent();
  });
});

render();
