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
    // set user firstname
    this.user[0].firstname = userFirstname;
    console.log(this.user);
    
    return this.user;
  }

  setUserAge(userAge) {
    if (this.user) return this.user[0].age = userAge, 
      console.log(this.user);
    return console.log('User is undefined');
  }

  setUserSexe(userSexe) {
    if (this.user) return this.user[0].sexe = userSexe,
      console.log(this.user);
    return console.log('User is undefined');
  }

  setUserCity(userCity) {
    if (this.user) return this.user[0].city = userCity,
      console.log(this.user);
    return console.log('User is undefined');
  }

  setUserArea(userArea) {
    if (this.user) return this.user[0].area = userArea,
      console.log(this.user);
    return console.log('User is undefined');
  }

  showUserData() {
    if (this.user) return console.log(this.user);
    return console.log('userData is undefined');
  }

  getUserData() {
    return this.user;
  }
}
