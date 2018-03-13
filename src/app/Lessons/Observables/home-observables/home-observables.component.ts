import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-home-observables',
  templateUrl: './home-observables.component.html',
  styleUrls: ['./home-observables.component.css']
})
export class HomeObservablesComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      );
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string> ) => {
      setTimeout(() => {
        observer.next('first package'); // Pushes the next data package
      }, 2000);
      setTimeout(() => {
        observer.next('second package'); // Pushes the next data package
      }, 4000);
      // setTimeout(() => {
      //   observer.error('this does not work!'); // Pushes the next data package
      // }, 5000);
      setTimeout(() => {
        observer.complete(); // Pushes the next data package
      }, 5000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log (data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy(){
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
