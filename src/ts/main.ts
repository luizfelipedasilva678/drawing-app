import "../css/style.css";

const canvas = document.getElementById("drawing-area") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

if (ctx) {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 300, 300);
  ctx.fill();
} else {
  alert("Canvas not supported");
}
