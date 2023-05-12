import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @ViewChild('form') TDForm!: NgForm;
  location = 'DHD';
  genders = ['Male', 'Female'];
  user = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    location: '',
    gender: '',
    remember: false,
  };
  submitted = false;
  constructor() {}
  ngOnInit(): void {}
  // public onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  public onSubmit() {
    console.log(this.TDForm);
    this.submitted = true;
    this.user.firstName = this.TDForm.value.fname;
    this.user.lastName = this.TDForm.value.lname;
    this.user.emailId = this.TDForm.value.email;
    this.user.password = this.TDForm.value.pwd;
    this.user.location = this.TDForm.value.location;
    this.user.gender = this.TDForm.value.gender;
    this.user.remember = this.TDForm.value.remember;
  }
  public setValueMethod() {
    this.TDForm.setValue({
      fname: 'Nirmit',
      lname: 'Valand',
      email: 'nirmitvaland692@gmail.com',
      pwd: '060900',
      location: 'DHD',
      gender: 'Male',
      remember: true,
    });
  }
  public patchValueMethod() {
    this.TDForm.form.patchValue({
      location: 'AHD',
      gender: 'Female',
    });
  }
}
