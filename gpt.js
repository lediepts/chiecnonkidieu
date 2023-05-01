const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spin');

let deg = 0;
let selectedNum = 0;

spinBtn.addEventListener('click', () => {
  spinBtn.style.pointerEvents = 'none';
  const angle = Math.random() * 360
  deg = Math.floor(360 * 5 + angle);
  wheel.style.transition = 'all 2s ease-in-out';
  wheel.style.transform = `rotate(${deg}deg)`;

  wheel.addEventListener('transitionend', () => {
    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(${angle}deg)`;
    spinBtn.style.pointerEvents = 'auto';
  });
  const selected = (Math.floor(((360 - (deg % 360)) % 360) / 36) + 3) % 11;
  selectedNum = selected;
  console.log('gpt.js:15>>', selectedNum)
});