import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent implements OnInit {
  @ViewChild(ChildComponentComponent)
  private childComponentComponent = {} as ChildComponentComponent;
  public startStopwatch() {
    this.childComponentComponent.start();
  }
  public stopStopwatch() {
    this.childComponentComponent.stop();
  }
  constructor() {}
  // Observable example
  myObservable = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
  });
  ngOnInit(): void {
    this.myObservable.subscribe((val) => {
      console.log(val);
    });
  }
  childDataReceived: string = '';
  public dataReceiver(data: any) {
    this.childDataReceived = data;
  }
}
