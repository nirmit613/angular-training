import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-obs-types',
  templateUrl: './obs-types.component.html',
  styleUrls: ['./obs-types.component.scss'],
})
export class ObsTypesComponent implements OnInit {
  title: string = 'Types of Observables';
  public ObsTypes = [
    { One: 'Subject' },
    { Two: 'Behaviour Subject' },
    { Three: 'Replay Subject' },
  ];
  subject = new Subject();
  behaviorSubject = new BehaviorSubject(
    'Hello..... from behavior subject with default value'
  );
  replaySubject = new ReplaySubject();
  ngOnInit(): void {
    this.handleSubject();
    this.handleBehaviorSubject();
    this.handleReplaySubject();
  }
  // Simple Observable
  observable = new Observable((observer) => {
    setTimeout(() => {
      observer.next('Heiii from observable');
    }, 2000);
  }).subscribe((res) => {
    console.log(res);
  });

  // Subject in Observables
  public handleSubject() {
    this.subject.next('This message is missed because not subscribe yet');
    this.subject.subscribe((res) => console.log(res));
    this.subject.next('Hello.....from subject');
  }
  // Behavior subject in Observables
  public handleBehaviorSubject() {
    this.behaviorSubject.subscribe((res) => console.log(res));
    this.behaviorSubject.next('Hello....again from behavior subject');
  }
  // Replay Subject in Observables
  public handleReplaySubject() {
    this.replaySubject.subscribe((res) => console.log(res));
    this.replaySubject.next('Hello.....from replay subject');
  }
}
