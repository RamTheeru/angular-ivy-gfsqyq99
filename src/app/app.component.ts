import { Component, VERSION } from '@angular/core';
import { Service1Service } from './service1.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  testval: string = '';
  Subscription: any;
  ispassed: boolean = false;
  numcontents: number[] = [];
  constructor(private ss: Service1Service) {}
  passbyclick() {
    this.ispassed = true;
    this.testval = 'data passed to child component';
  }
  mycheck() {
    this.testval = 'data passed to parent component';
  }
  checkvalfromchild() {
    // console.log(evnt);
    // this.numcontents = evnt;
    this.Subscription = this.ss.getVal().subscribe((i) => {
      console.log(i);
      // this.numcontents = i;
      // console.log(this.numcontents);
    });
  }
}
