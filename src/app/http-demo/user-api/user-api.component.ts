import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../interfaces/userInterface';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment as env } from 'src/environments/environment.development';
import { map } from 'rxjs';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.scss'],
})
export class UserApiComponent implements OnInit {
  public users: IUser[] = [];
  public updateId: string | null = null;
  @ViewChild('userForm') userForm!: NgForm;

  constructor(
    private http: HttpClient,
    private userService: UserserviceService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  public getUser() {
    // this.http
    //   .get(env.baseUrl + 'users.json')
    //   .pipe(
    //     map((res: { [k: string]: any }) => {
    //       const users: any = [];
    //       if (res) {
    //         Object.keys(res).forEach((id) => {
    //           let val: any = res[id];
    //           let obj = { id, ...val };
    //           users.push(obj);
    //         });
    //       }
    //       return users;
    //     })
    //   )
    this.userService.getUser().subscribe({
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
    // this.http.post(env.baseUrl + 'users.json', user)
    this.userService.addUser(user).subscribe({
      next: (response) => {
        console.log(response);
        this.userForm.reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  public updateUser(userForm: NgForm): void {
    const user = userForm.value;
    this.userService.updateUser(<string>this.updateId, user).subscribe({
      next: (response) => {
        console.log(response);
        this.userForm.reset();
        this.getUser();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  public deleteUser(id: string | undefined): void {
    this.userService.deleteUser(<string>id).subscribe({
      next: (response) => {
        console.log(response);
        this.getUser();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
