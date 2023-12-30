import { LEFT_MOUSE_BUTTON } from "./constants";
import MouseController from "./modules/models/MouseController";
import DrawingApp from "./modules/models/DrawingApp";
import addEvent from "./modules/utils/dom/addEvent";
import "../css/style.css";

function startApp() {
  // Getting elements from the DOM
  const canvas = document.getElementById("drawing-area") as HTMLCanvasElement;
  const color = document.getElementById("color") as HTMLInputElement;
  const lineWidth = document.getElementById("line-width") as HTMLInputElement;
  const save = document.getElementById("save") as HTMLButtonElement;
  const clearButton = document.getElementById(
    "clear-button"
  ) as HTMLButtonElement;

  const mouse = new MouseController();
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const drawingApp = new DrawingApp(ctx, mouse);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function startDrawing(x: number, y: number) {
    mouse.resetPositionValues();
    mouse.previousX = x;
    mouse.previousY = y;
  }

  function handleMouseMove(event: MouseEvent) {
    if (event.buttons === LEFT_MOUSE_BUTTON) {
      drawingApp.draw({ x: event.x, y: event.y }, color.value, lineWidth.value);
    }
  }

  function handleTouchMove(event: TouchEvent) {
    const { touches } = event;

    if (touches.length) {
      drawingApp.draw(
        { x: touches[0].clientX, y: touches[0].clientY },
        color.value,
        lineWidth.value
      );
    }
  }

  function handleTouchStart(event: TouchEvent) {
    const { touches } = event;

    if (touches.length) {
      startDrawing(touches[0].clientX, touches[0].clientY);
    }
  }

  function handleMouseDown(event: MouseEvent) {
    startDrawing(event.x, event.y);
  }

  function handleClearButtonClick() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function handleSaveButtonClick() {
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "canvas.png";
    a.click();
    a.remove();
  }

  addEvent("mousedown", canvas, handleMouseDown);
  addEvent("mousemove", canvas, handleMouseMove);
  addEvent("touchmove", canvas, handleTouchMove);
  addEvent("touchstart", canvas, handleTouchStart);
  addEvent("click", clearButton, handleClearButtonClick);
  addEvent("click", save, handleSaveButtonClick);
}

startApp();
