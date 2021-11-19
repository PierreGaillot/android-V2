import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-rythme',
  templateUrl: './rythme.page.html',
  styleUrls: ['./rythme.page.scss'],
})
export class RythmePage implements OnInit {
  private contactFrequency: string = '';

  constructor(
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
  }

}
