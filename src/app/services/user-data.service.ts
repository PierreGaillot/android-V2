import { Injectable } from '@angular/core';
import { UserDataModel } from 'src/app/models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public newUser: UserDataModel;

  constructor() { }

  createUser(userFirstname): UserDataModel {
    this.newUser = new UserDataModel();
    this.newUser.firstname = userFirstname;
    console.log(this.newUser);
    
    return this.newUser;
  }
}
