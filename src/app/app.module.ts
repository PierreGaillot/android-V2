import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SwipeDirective } from './directives/swipes/swipe.directive';


export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwipeDirective
  ],
  entryComponents: [],
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent],
})
export class AppModule { }
