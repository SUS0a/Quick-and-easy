import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registration-project.component.html',
  styleUrls: ['./registration-project.component.less']
})
export class RegistrationProjectComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      jobtitle: [null, [Validators.required]],
      organization: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      fullname: [null, [Validators.required]],
      phonenumber: [null, [Validators.required]],
      country: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      conferencecode: [null, [Validators.required]],
      agree: [false],
      formLayout: ['vertical'],
    });
  }

}
