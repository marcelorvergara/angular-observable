import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  // Created to holde the subscribe in order to unsubscribe OnDestroy life cycle
  intervalSubscribe: Subscription;

  constructor() { }

  ngOnInit() {
    // First subscription
    // this.intervalSubscribe =  interval(1000).subscribe(count => {
    //   console.log(count)
    // })

    // Second subscription
    // Real observable
    const custmoIntervalObs = Observable.create((observer) => {
      let count = 0
      setInterval(()=> {
        // Next to emmit a new value
        observer.next(count)
        // Complete to know when  you are done - unsubscribe is auto
        if (count === 2) {
          observer.complete()
        }
        // Fake error
        // Error to throw an error - unsubscribe is auto
        if (count > 3) {
          observer.error(new Error("Coutner is greater then 3!"))
        }
        count++
      }, 1000)
    })

    this.intervalSubscribe = custmoIntervalObs
      .subscribe((data: any) => console.log(data),
                                (error: any) => console.error('An error was thrown ', error),
                                () => console.log("Completed!"))
  }

  ngOnDestroy(): void {
    this.intervalSubscribe.unsubscribe()
  }

}
