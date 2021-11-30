import { Component } from '@angular/core';
import player from 'lottie-web';

export function playerFactory(){
  return player
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
