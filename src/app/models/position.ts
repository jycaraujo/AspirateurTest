import {Command} from './command';

export class Position {
    x = 0;
    y = 0;
    angle = 0;

    execute(command: Command) {
      this.angle += command;
      if (command === Command.ADVANCE) {
        this.x += Math.round(Math.cos(this.angle * Math.PI / 180));
        this.y += Math.round(Math.sin(this.angle * Math.PI / 180));
      }
    }

    reset() {
      this.x = 0;
      this.y = 0;
      this.angle = 0;
    }
}
