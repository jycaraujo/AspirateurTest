import {Component} from '@angular/core';
import {Position} from './models/position';
import {Command} from './models/command';
import {Direction} from './models/direction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Direction = Direction;
  Command = Command;
  position = new Position();
  xMax = 50;
  yMax = 50;
}
