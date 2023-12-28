import MouseController from "./modules/models/MouseController";
import DrawingApp from "./modules/models/DrawingApp";
import "../css/style.css";

const LEFT_MOUSE_BUTTON = 1;

const canvas = document.getElementById("drawing-area") as HTMLCanvasElement;
const color = document.getElementById("color") as HTMLInputElement;
const lineWidth = document.getElementById("line-width") as HTMLInputElement;
const clearButton = document.getElementById(
  "clear-button"
) as HTMLButtonElement;
const mouse = new MouseController();
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const drawingApp = new DrawingApp(ctx, mouse);
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

function handleMouseMove(event: MouseEvent) {
  if (event.buttons === LEFT_MOUSE_BUTTON) {
    drawingApp.draw({ x: event.x, y: event.y }, color.value, lineWidth.value);
  }
}

function handleMouseDown(event: MouseEvent) {
  mouse.resetPositionValues();
  mouse.previousX = event.x;
  mouse.previousY = event.y;
}

function handleClearButtonClick() {
  ctx.clearRect(0, 0, width, height);
}

window.addEventListener("mousedown", handleMouseDown);
window.addEventListener("mousemove", handleMouseMove);
clearButton.addEventListener("click", handleClearButtonClick);
