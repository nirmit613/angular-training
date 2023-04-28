import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit {
  @ViewChild(ChildComponentComponent)
  private childComponentComponent = {} as ChildComponentComponent;
  startStopwatch() {
    this.childComponentComponent.start();
  }
  stopStopwatch() {
    this.childComponentComponent.stop();
  }
  constructor() {}
  ngOnInit(): void {}
  childDataReceived: string = '';
  public dataReceiver(data: any) {
    this.childDataReceived = data;
  }
}
