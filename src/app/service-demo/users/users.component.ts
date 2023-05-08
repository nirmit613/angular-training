import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  constructor(public userService: UsersService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
    });
    this.userService.deletePost(1).subscribe((res) => {
      console.log(res);
    });
  }
}
