import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eugenie-infos',
  templateUrl: './eugenie-infos.component.html',
  styleUrls: ['./eugenie-infos.component.scss'],
})
export class EugenieInfosComponent implements OnInit {

  @Input() txtInfos: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
