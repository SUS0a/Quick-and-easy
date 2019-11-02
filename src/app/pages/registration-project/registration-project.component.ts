import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import countryList, {getNames} from 'country-list';

@Component({
  selector: 'app-registry',
  templateUrl: './registration-project.component.html',
  styleUrls: ['./registration-project.component.less']
})
export class RegistrationProjectComponent implements OnInit {
  countryList: any;
  validateForm: FormGroup;
  selectedValue = null;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      jobTitle: [null],
      organization: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      phoneNumber: [null],
      country: [null, [Validators.required]],
      conferenceCode: [null],
      agree: [false],
      formLayout: ['vertical'],
    });
    this.countryList = countryList.getNames();
  }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout && this.validateForm.controls.formLayout.value === 'horizontal';
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

  // confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
  //   if (!control.value) {
  //     return {required: true};
  //   } else if (control.value !== this.validateForm.controls.password.value) {
  //     return {confirm: true, error: true};
  //   }
  //   return {};
  // }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

}
