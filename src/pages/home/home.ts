import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
  animations: [

    trigger('flip', [
      state('flipped', style({
        transform: 'rotate(180deg)',
        backgroundColor: '#f50e80'
      })),
      transition('* => flipped', animate('400ms ease'))
    ]),

    trigger('flyInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(150%, 0, 0)'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ]),

    trigger('fade', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0.1
      })),
      transition('visible <=> invisible', animate('200ms linear'))
    ]),

    trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('300ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-10px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ])

  ]
})
export class HomePage {

  flipState: String = 'notFlipped';
  flyInOutState: String = 'in';
  fadeState: String = 'visible';
  bounceState: String = 'noBounce';

  constructor(public navCtrl: NavController) {

  }

  toggleFlip(){
    this.flipState = (this.flipState == 'notFlipped') ? 'flipped' : 'notFlipped';
  }

  toggleFlyInOut(){
    
    this.flyInOutState = 'out';

    setInterval(() => {
      this.flyInOutState = 'in';
    }, 2000);

  }

  toggleFade() {
    this.fadeState = (this.fadeState == 'visible') ? 'invisible' : 'visible';    
  }

  toggleBounce(){
    this.bounceState = (this.bounceState == 'noBounce') ? 'bouncing' : 'noBounce';   
  }

}
