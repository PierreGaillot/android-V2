import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from '../app/modules/shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    RouterModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    LottieModule
  ],
  providers: [
    EmailComposer,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
