import { Injectable } from '@angular/core';
import { UserDataModel } from 'src/app/models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public user: UserDataModel[];

  constructor() { }

  createUser(userFirstname): UserDataModel[] {
    // Create new user using UserDataModel class
    this.user = [new UserDataModel()];
    // set new user firstname
    this.user[0].firstname = userFirstname;
    console.log(this.user);
    
    return this.user;
  }

  setUserName(userAge) {
    if (this.user) return this.user[0].age = userAge, 
      console.log(this.user);
    return console.log('User is undefined');
  }

  showUserData() {
    if (this.user) return console.log(this.user);
    return console.log('userData is undefined');
  }
}
