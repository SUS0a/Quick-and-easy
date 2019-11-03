import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  validateForm: FormGroup;
  inputValue: string;
  radioValue = 'R';
  groupRegistrationValue = 'Y';
  style = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };
  // select
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = ['a10', 'c12'];
  dateFormat = 'yyyy/MM/dd';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      formLayout: ['vertical'],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      telephone: [null, [Validators.required]],
      mobile: [null],
      fax: [null],
      address: [null],
      gender: [null],

      eventName: [null, [Validators.required]],
      registrationType: [null, [Validators.required]],
      session: [null, [Validators.required]],
      ticket: [null, [Validators.required]],
      groupRegistration: [null],


      checkInDate: [null],
      checkOutDate: [null],
      foodChoice: [null],
      optionalTour: [null],
    });

    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({label: i.toString(36) + i, value: i.toString(36) + i});
    }
    this.listOfOption = children;
  }

}
