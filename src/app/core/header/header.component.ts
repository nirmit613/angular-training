import { Component } from '@angular/core';
import { InavbarList } from '../interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public navbarList: InavbarList[] = [
    {
      title: "Today's Deal",
      link: '#',
    },
    {
      title: 'Electronics',
      link: '#',
    },
    {
      title: 'Customer Service',
      link: '#',
    },
    {
      title: 'About',
      link: '#',
    },
  ];
}
