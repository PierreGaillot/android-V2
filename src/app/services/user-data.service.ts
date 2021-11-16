import { Injectable } from '@angular/core';
import { UserDataModel } from 'src/app/models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // public user: UserDataModel[];

  // testing
  public user: UserDataModel[] = [
    {
      firstname: 'Jean',
      age: '19-30 ans',
      sexe: 'homme',
      city: 'lille',
      area: 'five'
    }
  ]

  constructor() { }

  createUser(userFirstname): void {
    // Create new user using UserDataModel class
    this.user = [new UserDataModel()];

    this.setUserFirstname(userFirstname);
  }

  setUserFirstname(userFirstname): void {
    if (this.user) return this.user[0].firstname = userFirstname, 
      console.log(this.user);
    return console.log('User is undefined');
  }

  setUserAge(userAge): void {
    if (this.user) return this.user[0].age = userAge, 
      console.log(this.user);
    return console.log('User is undefined');
  }

  setUserSexe(userSexe): void {
    if (this.user) return this.user[0].sexe = userSexe,
      console.log(this.user);
    return console.log('User is undefined');
  }

  setUserCity(userCity): void {
    if (this.user) return this.user[0].city = userCity,
      console.log(this.user);
    return console.log('User is undefined');
  }

  setUserArea(userArea): void {
    if (this.user) return this.user[0].area = userArea,
      console.log(this.user);
    return console.log('User is undefined');
  }

  showUserData(): void {
    if (this.user) return console.log(this.user);
    return console.log('userData is undefined');
  }

  getUserData(): UserDataModel[] {
    return this.user;
  }
}
