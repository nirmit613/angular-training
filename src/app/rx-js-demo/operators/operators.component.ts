import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  catchError,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  from,
  of,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { OperatorsService } from '../operators.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit, OnDestroy {
  public title: string = 'RxJs Operators in Angular';
  subscriptions: Subscription[] = [];
  searchText!: string;
  breeds$!: Observable<any>;
  searchBreed$ = new Subject<string>();
  constructor(private operatorsService: OperatorsService) {}

  ngOnInit(): void {
    this.searchBreed();
  }
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
    this.subscriptions.push(
      this.operatorsService.ofOperatorwithList().subscribe((res) => {
        console.log(res);
      })
    );
  }
  public fromOperator() {
    this.subscriptions.push(
      this.operatorsService.fromOperator().subscribe((res) => {
        console.log('From operator:', res);
      })
    );
  }
  public concateWithOperator() {
    this.subscriptions.push(
      this.operatorsService.concatwithOperator().subscribe((res) => {
        console.log('ConcatWith operator ', res);
      })
    );
  }
  public mergeOperator() {
    this.subscriptions.push(
      this.operatorsService.mergeOperator().subscribe((res) => {
        console.log('merge Operator', res);
      })
    );
  }
  public mapOperator() {
    this.subscriptions.push(
      this.operatorsService.mapOperator().subscribe((res) => {
        console.log('map Operator', res);
      })
    );
  }
  public concatMapOperator() {
    this.subscriptions.push(
      this.operatorsService.concatMap().subscribe((res) => {
        console.log('ConcatMap Operator', res);
      })
    );

    this.subscriptions.push(
      this.operatorsService.concatMapWithAPI().subscribe((res) => {
        console.log('ConcatWithApi:', res);
      })
    );
  }
  public mergeMapOperator() {
    this.subscriptions.push(
      this.operatorsService.mergeMap().subscribe((res) => {
        console.log('MergeMap called', res);
      })
    );
  }
  public switchMapOperator() {
    this.subscriptions.push(
      this.operatorsService.switchMap().subscribe((res) => {
        console.log('switchMap called', res);
      })
    );
  }
  public takeOperator() {
    this.subscriptions.push(
      this.operatorsService
        .concatMapWithAPI()
        .pipe(take(1))
        .subscribe((res) => {
          console.log('Take operator is called', res);
        })
    );
  }
  public takeUntilOperator() {
    const timer$ = timer(3000);
    this.subscriptions.push(
      this.operatorsService
        .takeUntil()
        .pipe(takeUntil(timer$))
        .subscribe((res) => {
          console.log('take until operator is called', res);
        })
    );
  }
  public forkJoinOperator() {
    const obsOne = this.operatorsService.forkJoinOp('hound');
    const obsTwo = this.operatorsService.forkJoinOp('mastiff');
    const obsThree = this.operatorsService.forkJoinOp('retriever');
    forkJoin([obsOne, obsTwo, obsThree]).subscribe(
      (res) => {
        console.log('ForkJoin Data:', res);
      },
      (error) => {
        console.log('Error in forkjoin data', error);
      }
    );
  }
  public shareRepOperator() {
    this.operatorsService.shareReplay().subscribe((res) => {
      console.log('Observable 1:', res);
    });
    this.operatorsService.shareReplay().subscribe((res) => {
      console.log('Observable 2:', res);
    });
    setTimeout(() => {
      this.operatorsService.shareReplay().subscribe((res) => {
        console.log('Observable 3:', res);
      });
    }, 11000);
  }

  public search() {
    this.searchBreed$.next(this.searchText);
  }
  searchBreed() {
    this.breeds$ = this.searchBreed$.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap((searchText) => this.searchBreedApi(searchText))
    );
  }
  searchBreedApi(searchText: string): Observable<any> {
    if (searchText) {
      return from(this.operatorsService.forkJoinOp(searchText)).pipe(
        catchError((error) => {
          return of({});
        }),
        tap(() => console.log('Searching..!'))
      );
    }
    return of({});
  }
}
