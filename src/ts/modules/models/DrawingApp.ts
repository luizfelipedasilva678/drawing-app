import MouseController from "./MouseController";

export default class DrawingApp {
  private ctx: CanvasRenderingContext2D;
  private mouse: MouseController;

  constructor(ctx: CanvasRenderingContext2D, mouseController: MouseController) {
    this.ctx = ctx;
    this.mouse = mouseController;
  }

  updateMousePostion(newPosition: { x: number; y: number }) {
    this.mouse.previousX = this.mouse.currentX;
    this.mouse.previousY = this.mouse.currentY;
    this.mouse.currentX = newPosition.x;
    this.mouse.currentY = newPosition.y;
  }

  draw(newPosition: { x: number; y: number }) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = "round";
    // @ts-ignore
    this.ctx.moveTo(this.mouse.previousX, this.mouse.previousY);
    this.updateMousePostion(newPosition);
    // @ts-ignore
    this.ctx.lineTo(this.mouse.currentX, this.mouse.currentY);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}
