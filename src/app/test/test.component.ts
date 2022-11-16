import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service1Service } from '../service1.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input('gd') getdata = '';
  @Output('ot') outdata = new EventEmitter<number[]>();
  val: string = '';
  dd: string = 'displaying content';
  isset: boolean = false;
  nums: number[] = [1, 2, 3, 4, 5];
  num: number = 5.68;
  classT: string = '';
  color: string = 'green';
  constructor(private ss: Service1Service) {}
  public myclasses = {
    'text-success': !this.isset,
    'text-danger': this.isset,
    'text-special': true,
  };
  public mystyles = {
    color: 'red',
    fontStyle: 'bold',
  };

  ngOnInit() {
    //this.val = this.getdata;
    //this.isset = this.val != '';
  }
  passval(val) {
    console.log(val.tagName);
    var tag = val.tagName;
    if (tag == 'P') {
      alert('Itsa paragraph');
    }
  }
  oncheck() {
    this.color = 'blue';
    this.isset = true;
    this.val = this.getdata;
    this.myclasses = {
      'text-success': !this.isset,
      'text-danger': this.isset,
      'text-special': true,
    };
    this.mystyles = {
      color: 'blue',
      fontStyle: 'italic',
    };
    this.classT = 'blue';
    //this.isset = this.ival != '';
  }
  passtoparent() {
    //this.outdata.emit(this.nums);
    this.savenums();
  }
  savenums() {
    this.ss.savenums(this.nums);
  }
}
