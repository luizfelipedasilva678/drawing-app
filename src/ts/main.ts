import MouseController from "./modules/models/MouseController";
import DrawingApp from "./modules/models/DrawingApp";
import "../css/style.css";

const LEFT_MOUSE_BUTTON = 1;

const canvas = document.getElementById("drawing-area") as HTMLCanvasElement;
const mouse = new MouseController();
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const drawingApp = new DrawingApp(ctx, mouse);
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener("mousedown", handleMouseDown);
window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event: MouseEvent) {
  if (event.buttons === LEFT_MOUSE_BUTTON) {
    drawingApp.draw({ x: event.x, y: event.y });
  }
}

function handleMouseDown(event: MouseEvent) {
  mouse.resetPositionValues();
  mouse.previousX = event.x;
  mouse.previousY = event.y;
}
