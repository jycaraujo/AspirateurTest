import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  initial_x;
  initial_y;

  coord_x;
  coord_y;

  title = 'challenge';

  constructor(private appService: AppService){
    this.coord_x = 10;
    this.coord_y = 10;
    this.initial_x = 0;
    this.initial_y = 0;

  }

  changeOrientation(event){
    this.appService.orientation.emit(event.target.value);
  }
  changeDirection(event){
    this.appService.direction.emit(event.target.value);
  }
}
