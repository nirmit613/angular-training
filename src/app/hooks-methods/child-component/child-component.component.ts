import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent
  implements OnInit, OnChanges, AfterContentInit 
{
  constructor() {
    console.log('constructor is called');
  }
  // @Input decorator
  @Input() name: string = '';

  // @Output decorator
  childData: string = 'Data From Child component to parent component';
  @Output() emitData = new EventEmitter<string>();

  public clickMe(): void {
    this.emitData.emit(this.childData);
  }
  // @viewChild decorator

  counterRun: boolean = false;
  counter: number = 0;

  public start() {
    this.counterRun = true;
    let interval = setInterval(() => {
      if (this.counterRun === false) {
        clearInterval(interval);
      }
      this.counter = this.counter + 1;
    }, 1000);
  }
  public stop() {
    this.counterRun = false;
  }
  // @ContentChild in angular
  @ContentChild('paragraphElement') paragraphEl!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ng on changes method called');
  }
  ngOnInit(): void {
    console.log('ng on init method called');
    console.log(this.paragraphEl);
  }

  ngAfterContentInit(): void {
    console.log('ng after content init called');
    // for change the value of the ng-content text from parent we can use like this and change the content
    this.paragraphEl.nativeElement.textContent =
      'This is from new ng content paragraph';
    console.log(this.paragraphEl.nativeElement.textContent);
  }
}
