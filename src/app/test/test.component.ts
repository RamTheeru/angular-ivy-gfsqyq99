import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input('iv') ival: string = '';
  @Output('t') tt = new EventEmitter<string>();
  val: string = '';
  isset: boolean = false;
  nums: number[] = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {
    this.val = this.ival;
    //this.isset = this.val != '';
  }
  oncheck() {
    this.isset = this.ival != '';
  }
  test() {
    this.tt.emit('go');
  }
}
