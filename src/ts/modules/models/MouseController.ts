export default class MouseController {
  private _currentX: number | undefined = undefined;
  private _currentY: number | undefined = undefined;
  private _previousX: number | undefined = undefined;
  private _previousY: number | undefined = undefined;

  resetPositionValues(): void {
    this._currentX = undefined;
    this._currentY = undefined;
    this._previousX = undefined;
    this._previousY = undefined;
  }

  get currentX(): number | undefined {
    return this._currentX;
  }

  get currentY(): number | undefined {
    return this._currentY;
  }

  get previousX(): number | undefined {
    return this._previousX;
  }

  get previousY(): number | undefined {
    return this._previousY;
  }

  set currentX(value: number | undefined) {
    this._currentX = value;
  }

  set currentY(value: number | undefined) {
    this._currentY = value;
  }

  set previousX(value: number | undefined) {
    this._previousX = value;
  }

  set previousY(value: number | undefined) {
    this._previousY = value;
  }
}
