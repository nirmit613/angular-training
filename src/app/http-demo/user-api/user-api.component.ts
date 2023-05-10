import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../interfaces/userInterface';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.scss'],
})
export class UserApiComponent implements OnInit {
  public users: IUser[] = [];
  @ViewChild('userForm') userForm!: NgForm;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUser();
  }

  public getUser() {
    this.http
      .get(environment.baseUrl + 'users.json')
      .pipe(
        map((res: { [k: string]: any }) => {
          const users: any = [];
          Object.keys(res).forEach((id) => {
            let val: any = res[id];
            let obj = { id, ...val };
            users.push(obj);
          });
          return users;
        })
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.users = res;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  public addUser(userForm: NgForm): void {
    const user = userForm.value;
    this.http.post(environment.baseUrl + 'users.json', user).subscribe({
      next: (response) => {
        console.log(response);
        this.userForm.reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  public updateUser(userForm: NgForm) {
    const users = userForm.value;
    this.http
      .put(environment.baseUrl + 'users/-NV6RsyFB5oju47P3HWv.json', users)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  public deleteUser(userForm: NgForm): void {
    const user = userForm.value;
    this.http
      .delete(environment.baseUrl + 'users/-NV6OFkIrcDMBtKUalj3.json', user)
      .subscribe({
        error: (error) => {
          console.log(error);
        },
      });
  }
}
