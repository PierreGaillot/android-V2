import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EugenieAnimComponent } from 'src/app/components/eugenie-anim/eugenie-anim.component';
import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { SwipeupComponent } from 'src/app/components/swipeup/swipeup.component';

import { SwipeDirective } from 'src/app/directives/swipes/swipe.directive';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory(){
  return player
}

@NgModule({
  declarations: [
    SwipeDirective,
    EugenieAnimComponent,
    EugenieInfosComponent,
    NavbarComponent,
    ProgressBarComponent,
    QuestionComponent,
    SwipeupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LottieModule.forRoot({player:playerFactory})
  ],
  exports: [
    SwipeDirective,
    EugenieAnimComponent,
    EugenieInfosComponent,
    NavbarComponent,
    ProgressBarComponent,
    QuestionComponent,
    SwipeupComponent,
    RouterModule,
    LottieModule
  ]
})

export class SharedModule { }
