import { NotificationService } from './shared/services/notification.service';
import { IMYSliderValue } from './header/header.component';
import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ithillel-dec';

  public count: number = 0;
  public count1 = 0


  public text: string;

  constructor(
    private notificationService: NotificationService
  ) {
    console.log(environment);

  }

  ngOnInit() {
    this.notificationService.subscribeNotification()
    .subscribe((value: string) => this.text = value);
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
