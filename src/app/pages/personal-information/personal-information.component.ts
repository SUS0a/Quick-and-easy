import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import countryList, {getNames} from 'country-list';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.less']
})
export class PersonalInformationComponent implements OnInit {

  pic = [
    {
      active: true,
      arrow: false,
      name: 'Pic',
      disabled: true,
    }
  ];
  basic = [
    {
      active: true,
      arrow: false,
      name: 'Basic',
      disabled: true,
    }
  ];
  validateForm: FormGroup;
  countryList: any;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      jobTitle: [null],
      organization: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      phoneNumber: [null],
      country: [null, [Validators.required]],
      // conferenceCode: [null],
      formLayout: ['vertical'],
    });
    this.countryList = countryList.getNames();
  }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
    this.validateForm.controls[i].markAsDirty();
    this.validateForm.controls[i].updateValueAndValidity();
  }
}

updateConfirmValidator(): void {
  /** wait for refresh value */
  Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
}



}
