import { round } from 'tfjs-image-recognition-base';

export class FaceMatch {
  private _label: string
  private _distance: number

  constructor(label: string, distance: number) {
    this._label = label
    this._distance = distance
  }

  public get label(): string { return this._label }
  public get distance(): number { return this._distance }

  public toString(withDistance: boolean = true): string {
    return `${this.label}${withDistance ? ` (${round(this.distance)})` : ''}`
  }
}