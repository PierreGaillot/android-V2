import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailComposer } from '@ionic-native/email-composer/ngx'

import { NavbarComponent } from './components/navbar/navbar.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
// import { SwipeDirective } from './directives/swipes/swipe.directive';
import { SwipeModule } from './modules/swipe/swipe.module';


export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  entryComponents: [],
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SwipeModule
  ],
  providers: [
    EmailComposer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
