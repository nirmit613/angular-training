import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AsyncValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  genders = ['Male', 'Female'];
  userForm!: FormGroup;
  forbiddenPasswords = ['12345678', '987654321'];
  constructor() {}
  ngOnInit(): void {
    this.initializeForm();
  }
  // public initializeForm() {
  //   this.userForm = new FormGroup({
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     pwd: new FormControl(null, Validators.required),
  //     location: new FormControl(null),
  //     gender: new FormControl('Male'),
  //     remember: new FormControl(null, Validators.required),
  //   });
  // }
  public initializeForm() {
    this.userForm = new FormGroup({
      login: new FormGroup({
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.checkForbiddenEmail as AsyncValidatorFn
        ),
        // pwd: new FormControl(null, Validators.required),
        pwd: new FormControl(null, [
          Validators.required,
          this.checkForbiddenPasswords.bind(this),
        ]),
      }),
      location: new FormControl(null),
      gender: new FormControl('Male'),
      remember: new FormControl(null, Validators.required),
      hobbies: new FormArray([]),
    });
    this.userForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.userForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    // this.userForm.get('login.email')!.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });
  }
  public onSubmit() {
    console.log('this.userForm :- ', this.userForm);
    this.userForm.reset({ gender: 'Male', location: 'BRD' });
  }
  public addHobby() {
    const formControl = new FormControl(null, Validators.required);
    // here we need to cast to <FormArray>
    (<FormArray>this.userForm.get('hobbies')).push(formControl);
  }
  public getHobbyControls() {
    return (<FormArray>this.userForm.get('hobbies')).controls;
  }
  public checkForbiddenPasswords(control: FormControl): {
    [k: string]: boolean;
  } {
    if (this.forbiddenPasswords.indexOf(control.value) !== -1) {
      return { passwordForbidden: true };
    }
    return { passwordForbidden: false };
    // return null;
  }
  public checkForbiddenEmail(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'nirmit@nirmit.com') {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
  public setValueMethod() {
    this.userForm.setValue({
      login: {
        email: 'default@gmail.com',
        pwd: '12345678',
      },
      location: 'AHD',
      gender: 'Male',
      remember: true,
      hobbies: [],
    });
  }
  public patchValueMethod() {
    this.userForm.patchValue({
      location: 'RJT',
      gender: 'Female',
    });
  }

  validateControl(controlName:string,errorName:string){
    let x = this.userForm.get(controlName)?.errors;
    if(x) return x[errorName]
    else null;
  }
}
