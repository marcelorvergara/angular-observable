import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs'

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
    this.intervalSubscribe =  interval(1000).subscribe(count => {
      console.log(count)
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscribe.unsubscribe()
  }

}
