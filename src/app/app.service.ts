import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  orientation: EventEmitter<any> = new EventEmitter();
  direction: EventEmitter<any> = new EventEmitter();
  current_direction = 'N';

  constructor() { }
}
