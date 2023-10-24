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
        count++
        // Error to throw an error
        // Complete to know when  you are done
      },1000)
    })

    this.intervalSubscribe = custmoIntervalObs.subscribe(data => console.log(data))
  }


  ngOnDestroy(): void {
    this.intervalSubscribe.unsubscribe()
  }

}
