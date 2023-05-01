const canvas = document.getElementById('canvas');
const spinBtn = document.querySelector('.spin');
const ctx = canvas.getContext('2d');

let deg = 0;
let selectedNum = 0;

spinBtn.addEventListener('click', () => {
  spinBtn.style.pointerEvents = 'none';
  deg = Math.floor(5000 + Math.random() * 5000);
  animateWheel();
});

function animateWheel() {
  const speed = 30;
  let animation = requestAnimationFrame(animateWheel);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(deg * Math.PI / 180);

  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const angle = 360 / numbers.length;

  for (let i = 0; i < numbers.length; i++) {
    const radian = (angle * i - angle / 2) * Math.PI / 180;
    ctx.fillStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, canvas.width / 2 - 50, radian, radian + angle * Math.PI / 180);
    ctx.lineTo(0, 0);
    ctx.fill();

    ctx.save();
    ctx.translate(0, canvas.width / 2 - 100);
    ctx.rotate(-radian);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 30px Arial';
    ctx.fillText(numbers[i], -20, 10);
    ctx.restore();
  }

  ctx.restore();

  if (speed >= deg) {
    cancelAnimationFrame(animation);
    const selected = Math.floor(((360 - (deg % 360)) % 360) / angle);
    selectedNum = numbers[selected];
    spinBtn.style.pointerEvents = 'auto';
    alert(`You have won ${selectedNum}!`);
  }

  deg += speed;
}
