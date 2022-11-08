import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  testval: string = '';
  ispassed: boolean = false;
  numcontents: number[] = [];
  passbyclick() {
    this.ispassed = true;
    this.testval = 'data passed to child component';
  }
  mycheck() {
    this.testval = 'data passed to parent component';
  }
  checkvalfromchild(evnt) {
    console.log(evnt);
    this.numcontents = evnt;
  }
}
