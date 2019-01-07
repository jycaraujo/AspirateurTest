import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Position } from '../models/position';
import { reject } from 'q';
import { AppService } from '../app.service';
import { Vector } from '../models/vector';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnChanges {

  x = [];
  y = [];
  degree = 0;
  show: boolean;
  @Input() coord_x;
  @Input() coord_y;
  @Input() initial_x;
  @Input() initial_y;
  
  size = 50;
  current: Position;
  private DegToRad = Math.PI/180;
  _id = '00';

  constructor(private appService: AppService) { 
    this.current = {
      vector: {
        x: 0,
        y: 1
      }, 
      position: {
        x: 0,
        y: 0
      }, 
      orientation: 'N'
    }
  }

  ngOnInit() {
    this.appService.orientation.subscribe((direction)=>{
      console.log(direction)
      if(direction == 'R'){
        this.current.position.x = this.initial_x;
        this.current.position.y = this.initial_y;
        this._id = this.current.position.x.toString()+this.current.position.y.toString();
        this.current.vector.x = 0;
        this.current.vector.y = 1;
      }
      else{
        this.getPosition(direction).then(()=>{
          // console.log(this.current.vector)
        });
      }
      
    });

    this.appService.direction.subscribe((direction)=>{
      switch(direction){
        case 'N':
          this.current.vector.x = 0;
          this.current.vector.y = 1;
          break;
        case 'S':
          this.current.vector.x = 0;
          this.current.vector.y = -1;
          break;
        case 'E':
          this.current.vector.x = 1;
          this.current.vector.y = 0;
          break;
        case 'W':
          this.current.vector.x = -1;
          this.current.vector.y = 0;
          break;
      }
    });

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    
    if(!isNullOrUndefined(this.coord_y) && !isNullOrUndefined(this.coord_x)){
      this.draw().then(() => {
        this.show = true;
      });
    }
    if(!isNullOrUndefined(this.initial_y) && !isNullOrUndefined(this.initial_x)){
      this.current.position.x = this.initial_x;
      this.current.position.y = this.initial_y;
      this._id = this.current.position.x.toString()+this.current.position.y.toString();
    }
    else{
      this.show = false;
    }
  }

  getPosition = (direction) => new Promise((resolve, reject) => {
    this.current.orientation = direction;
    try{
      if(direction == 'A'){
        let temp_x = this.current.position.x+this.current.vector.x;
        let temp_y = this.current.position.y+this.current.vector.y;
        if(temp_x < 0 || temp_x > this.coord_x || temp_y < 0 || temp_y > this.coord_y){
          throw "Out of bounds";
        }
        else{
          this.current.position.x += this.current.vector.x;
          this.current.position.y += this.current.vector.y;
          this._id = this.current.position.x.toString()+this.current.position.y.toString();
        }        
      }
      else{
        if(direction == 'D'){
          this.degree = -90
        }
        if(direction == 'E'){
          this.degree = 90
        }
        let ang = this.degree * this.DegToRad;
        let temp_x = Math.round(this.current.vector.x * Math.cos(ang) - this.current.vector.y * Math.sin(ang));
        let temp_y = Math.round(this.current.vector.x * Math.sin(ang) + this.current.vector.y * Math.cos(ang));
        this.current.vector.x = temp_x;
        this.current.vector.y = temp_y;
      }
      resolve();
    }
    catch(e){
      alert(e)
    }
  })


  draw = () => new Promise((resolve, reject) => {
    this.y = [];
    this.x = [];
    let temp_x = this.coord_x;
    let temp_y = this.coord_y;
    for(let i = 0; i<temp_x; i++){
      this.x.push(i);
    }
    for(let i = temp_y-1; i>= 0; i--){
      this.y.push(i);
    }
    resolve();
    });
}
