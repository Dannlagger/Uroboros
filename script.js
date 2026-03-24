const frame = document.getElementById('decompose-frame');
const section = document.getElementById('decompose-section');

const columns = 6;
const rows = 8;
const tiles = [];

for (let row = 0; row < rows; row += 1) {
  for (let col = 0; col < columns; col += 1) {
    const tile = document.createElement('div');
    tile.className = 'tile';

    const width = 100 / columns;
    const height = 100 / rows;

    tile.style.width = `${width}%`;
    tile.style.height = `${height}%`;
    tile.style.left = `${col * width}%`;
    tile.style.top = `${row * height}%`;
    tile.style.backgroundPosition = `${(col / (columns - 1 || 1)) * 100}% ${(row / (rows - 1 || 1)) * 100}%`;

    frame.appendChild(tile);
    tiles.push({ tile, col, row });
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateTiles() {
  const rect = section.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  const progress = clamp(-rect.top / total, 0, 1);

  tiles.forEach(({ tile, col, row }, index) => {
    const centerX = col - (columns - 1) / 2;
    const centerY = row - (rows - 1) / 2;
    const distance = Math.sqrt(centerX * centerX + centerY * centerY) + 0.35;
    const wave = Math.max(0, progress * 1.15 - distance * 0.08);
    const spread = wave * 140;
    const driftX = centerX * spread;
    const driftY = centerY * spread;
    const rotate = centerX * 10 * progress + row * 2.4;
    const depth = wave * 120;
    const opacity = 1 - progress * 0.72;
    const blur = progress * 1.4;
    const scale = 1 - wave * 0.12;

    tile.style.transform = `translate3d(${driftX}px, ${driftY}px, ${depth}px) rotate(${rotate}deg) scale(${scale})`;
    tile.style.opacity = opacity.toFixed(3);
    tile.style.filter = `blur(${blur}px) saturate(${1 + progress * 0.35})`;
    tile.style.zIndex = String(1000 - index);
  });

  frame.style.transform = `scale(${1 - progress * 0.08}) rotateX(${progress * 6}deg)`;
  frame.style.opacity = String(1 - progress * 0.2);
}

updateTiles();
window.addEventListener('scroll', updateTiles, { passive: true });
window.addEventListener('resize', updateTiles);
