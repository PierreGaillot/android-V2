import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-eugenie-anim',
  templateUrl: './eugenie-anim.component.html',
  styleUrls: ['./eugenie-anim.component.scss'],
  template: `<main lottie [options]="options" (animationCreated)="animationCreated($event)"></main>`,
})
export class EugenieAnimComponent implements OnInit {
  options: AnimationOptions = {
    path: '../../../assets/img/data.json',
    loop:false,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() { }

  ngOnInit() {}

}
