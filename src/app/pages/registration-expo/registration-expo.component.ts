import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration-expo',
  templateUrl: './registration-expo.component.html',
  styleUrls: ['./registration-expo.component.less']
})
export class RegistrationExpoComponent implements OnInit {
  panels = [
    {
      id: 1,
      active: true,
      name: 'Your Info',
      disabled: false
    },
    {
      id: 2,
      active: false,
      disabled: false,
      name: 'Conference/Expo'
    },
    {
      id: 3,
      active: false,
      disabled: false,
      name: 'Travel Info'
    },
    {
      id: 4,
      active: false,
      disabled: false,
      name: 'Payment Info'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
