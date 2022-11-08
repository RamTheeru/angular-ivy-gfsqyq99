import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input('gd') getdata = '';
  val: string = '';
  isset: boolean = false;
  nums: number[] = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {
    //this.val = this.getdata;
    //this.isset = this.val != '';
  }
  oncheck() {
    this.val = this.getdata;
    //this.isset = this.ival != '';
  }
}
