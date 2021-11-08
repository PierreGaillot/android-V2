import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
<<<<<<< HEAD
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { EugenieInfosComponent } from 'src/app/components/eugenie-infos/eugenie-infos.component';
=======
// import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
>>>>>>> bdc9f3c... return button : ok

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
<<<<<<< HEAD
    NavbarComponent,
    EugenieInfosComponent
=======
    // NavbarComponent
>>>>>>> bdc9f3c... return button : ok
  ]
})
export class HomePageModule {}
