import { Component, OnInit, HostListener } from '@angular/core';
import { event } from 'jquery';
import { backgroundColors } from './Shared/background-colors-enum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public backgroundColor: string = '';
  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    const yAxisValue = window.pageYOffset;
    switch (true) {
      case yAxisValue === 0:
        this.backgroundColor = backgroundColors.One;
        console.log(this.backgroundColor,yAxisValue);
        break;
      case yAxisValue >= 500:
        this.backgroundColor = backgroundColors.Two;
        console.log(this.backgroundColor,yAxisValue);
        break;
      case yAxisValue >= 1500:
        this.backgroundColor = 'red';
        console.log(this.backgroundColor,yAxisValue);
        break;
      case yAxisValue >= 2500:
        this.backgroundColor = 'green';
        console.log(this.backgroundColor,yAxisValue);
        break;
    }
    // if(yAxisValue === 0){
    //   this.backgroundColor = backgroundColors.One;
    // }
    // if (yAxisValue > 500) {
    //   this.backgroundColor = backgroundColors.Two;
    // }
    // if (yAxisValue > 1500) {
    //   this.backgroundColor = backgroundColors.Three;
    // }
    // if (yAxisValue > 2500) {
    //   this.backgroundColor = backgroundColors.Four;
    // }
    // if (yAxisValue > 3500) {
    //   this.backgroundColor = backgroundColors.Five;
    // }
  }
  constructor() { }

  ngOnInit(): void {

  }
}
