const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

const SIZE = 600

canvas.width = SIZE
canvas.height = SIZE

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const colors = new Array(100).fill(0).map(_ => '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
const PI = Math.PI

document.getElementById("canvas").appendChild(canvas)

function drawPizza(sDeg, eDeg, color) {
  const center = SIZE / 2
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(center, center);
  ctx.arc(center, center, center * 0.8, sDeg, eDeg);
  ctx.arc(center, center, center * 0.8, sDeg, eDeg);
  ctx.fillStyle = color
  ctx.fill()
  ctx.restore();
}
function drawText() {
  ctx.save();
  ctx.rotate(-45, x, y);
  ctx.drawText("your text here", x, y, paint);
  ctx.restore();
}
function start() {
  const iDeg = 2 * PI / arr.length
  for (let i = 0; i < arr.length * 10; i++) {
    drawPizza(i * iDeg, (i + 1) * iDeg, colors[i])
  }
}
start()

