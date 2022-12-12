import { Injectable } from '@angular/core';
import { UserDataModel } from 'src/app/models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public user: UserDataModel[];
  public userFirstname: string = '';

  // testing
  // public user: UserDataModel[] = [
  //   {
  //     firstname: 'Jean',
  //     age: '19-30 ans',
  //     sexe: 'homme',
  //     city: 'lille',
  //     area: 'fives',
  //     purpose: ['Trouver un stage en entreprise', 'Effectuer un Service Civique'],
  //     method: 'présentiel',
  //     contactFrequency: 'Tous les 15 jours',
  //     contact: 'georges.bougloudou@gmail.com',
  //     isMail: true,
  //     isPhone: false,
  //   }
  // ]


  constructor() { }

  // Create / Update User data 
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

  setUserPurpose(userPurpose): void {
    if (this.user) return this.user[0].purpose = userPurpose,
      console.log(this.user);
    return console.log('User is undefined');
  }

  setUserMethod(userMethod): void {
    if (this.user) return this.user[0].method = userMethod,
      console.log(this.user);
    return console.log('User is undefined');
  }
  
  setUserContactFrequency(userContactFrequency): void {
    if (this.user) return this.user[0].contactFrequency = userContactFrequency,
    console.log(this.user);
    return console.log('User is undefined');
  }

  setUserContact(userContact): void {
    if (this.user) return this.user[0].contact = userContact,
      console.log(this.user);
    return console.log('UserContact is undefined');
  }

  setUserPhone(userPhone): void {
    if (this.user) return this.user[0].phone = userPhone,
      console.log(this.user);
    return console.log('UserPhone is undefined');
  }

  setUserMail(userMail): void {
    if (this.user) return this.user[0].mail = userMail,
      console.log(this.user);
    return console.log('UserMail is undefined');
  }
  
  // Expose User data 
  getUserData(): UserDataModel[] {
    return this.user;
  }

  getUserFirstname(): string {
    this.userFirstname = this.user[0].firstname;
    // console.log(this.userFirstname);
    return this.userFirstname;
  }

  showUserData(): void {
    if (this.user) return console.log(this.user);
    return console.log('userData is undefined');
  }

  
}
