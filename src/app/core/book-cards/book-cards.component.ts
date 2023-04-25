import { Component, Input, OnInit } from '@angular/core';
import { IBookLists } from '../interfaces/bookList.interface';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss'],
})
export class BookCardsComponent implements OnInit {
  @Input() book!: IBookLists;
  constructor() {}
  ngOnInit(): void {}
}
