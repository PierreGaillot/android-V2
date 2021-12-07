import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { UserDataModel } from 'src/app/models/user-data.model';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.page.html',
  styleUrls: ['./fin.page.scss'],
})
export class FinPage implements OnInit, AfterViewInit {
  
options:AnimationOptions = {
  path:'../../../../assets/img/data.json'
}

  private userContactType: string = '';
  private contactIsPhone : boolean;
  private userData: UserDataModel[] = [];

  constructor(
    public userDataService: UserDataService,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() { 
    this.userData = this.userDataService.getUserData();
    this.contactIsPhone = this.userData[0].isPhone;
    console.log(this.contactIsPhone);
    this.getContactType(this.contactIsPhone);
  }

  getContactType(isPhone) {
    if (isPhone) {
      this.userContactType = 'téléphone';
    } else {
      this.userContactType = 'e-mail';
    } 
  }

  // sendMail() {

  //   this.emailComposer.hasAccount().then((isValid: boolean) => {
  //     if (isValid) {
  //       // Now we know we have a valid email account configured
  //       console.log('isValid' + isValid)
  //     }
  //    });

  //   this.emailComposer.isAvailable().then((available: boolean) =>{
  //     if(available) { 
  //       console.log('isAvailable' + available)
  //     } 
  //   });

  //   //Now we know we can send
  //   let email = {
  //     to: 'gournay.guillaume@gmail.com',
  //     cc: 'pr.gaillot@gmail.com',
  //     bcc: [],
  //     attachments: [],
  //     app: 'gmail',
  //     subject: 'Ca marche pas wallah',
  //     body: 'How are you? Nice greetings from Leipzig',
  //     isHtml: true
  //   }
    
  //   // Send a text message using default options
  //   this.emailComposer.open(email);
  // }
     
}
