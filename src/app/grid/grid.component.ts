import {Component, Input} from '@angular/core';
import {Position} from '../models/position';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() xMax;
  @Input() yMax;
  @Input() position: Position;

  getXAxis() {
    return Array.apply(null, {length: this.xMax}).map(Number.call, Number);
  }

  getYAxis() {
    return Array.apply(null, {length: this.xMax}).map(Number.call, Number);
  }
}
