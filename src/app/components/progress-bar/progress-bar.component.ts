import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  private progressWidth = document.getElementById('progress');

  @Input() step: any = 1;

  // chargeBar(){
  //   if(this.step == 1){
  //     this.progressWidth.style.width = "width: calc(100%/3);";
  //   }else if(this.step == 2){
  //     this.progressWidth.style.width = "width: calc(100%/3)*2;";
  //   }else{
  //     this.progressWidth.style.width = "width: 100%;";
  //   }
  // }


  ngOnInit() {
    // this.chargeBar();
  }

}
