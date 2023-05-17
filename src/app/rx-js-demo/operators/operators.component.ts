import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperatorsService } from '../operators.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit, OnDestroy {
  public title: string = 'RxJs Operators in Angular';
  subscriptions: Subscription[] = [];
  constructor(private operatorsService: OperatorsService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
  public ofOperator() {
    this.subscriptions.push(
      this.operatorsService.ofOperator().subscribe((res) => {
        console.log(res);
      })
    );
  }
}
