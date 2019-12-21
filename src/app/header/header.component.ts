import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


export interface IMYSliderValue {
  value: number;
  abs: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('mytitle')
  public title: string = 'Default title';

  @Input()
  public color: string = 'red';

  @Input()
  public set age(a: number) {
    console.log(a);
    // this.
  }

  @Input()
  public count: number = 0;

  @Output()
  public myIncrease: EventEmitter<void> = new EventEmitter();


  @Output()
  public myDecrese: EventEmitter<void> = new EventEmitter();



  @Output()
  public myOnSlider: EventEmitter<IMYSliderValue> = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  increse() {
    this.myIncrease.emit();
  }

  decrese() {
    this.myDecrese.emit();
  }

  mySlider(event) {
    this.myOnSlider.emit({ value: (event.target as any).value, abs: '34234' });
  }

}
