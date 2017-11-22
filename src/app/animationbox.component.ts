import {Component, AfterViewInit} from '@angular/core';
import { trigger, style, state,transition ,animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-animationbox',
  templateUrl: './animationbox.component.html',
  styleUrls: ['./animationbox.component.css'],
  animations:[
    trigger('intro', [
      state('in', style({opacity:'1'})),
      state('out',style({opacity:'1'})),
      transition('* <=> *', [
        animate('15s ease-out', keyframes([
          style({backgroundPosition:'0% 00%', offset:0}),
          style({backgroundPosition:'0% 100%',offset:0.5}),
          style({backgroundPosition:'0% 0%',offset:1})
        ]))

      ])
    ])
  ]
})

export class AnimationboxComponent implements AfterViewInit{
  state = 'in';
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }

  onEnd(event) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
}
