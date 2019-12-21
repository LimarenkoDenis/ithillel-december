import { IMYSliderValue } from './header/header.component';
import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ithillel-dec';

  public count: number = 0;
  public count1 = 0

  constructor() {
    console.log(environment);

  }


  increase() {
    this.count = this.count + 1;
  }

  decrese() {
    this.count = this.count - 1;
  }

  changeSlider(value: IMYSliderValue) {
    console.log(value);

  }
}
