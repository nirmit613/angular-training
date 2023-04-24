import { Component } from '@angular/core';
import { componentOneService } from '../componentOne.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent {
  title = 'Add your name';
  addButton = 'AddName';
  deleteButton = 'Delete ';
  newName!: string;

  constructor(private componentOneService: componentOneService) {}

  public addName() {
    this.componentOneService.addName(this.newName);
    this.newName = '';
  }

  public deleteName(id: number) {
    this.componentOneService.deleteName(id);
  }

  public get data() {
    return this.componentOneService.getNames();
  }
}
