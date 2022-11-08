import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  testval: string = '';
  passbyclick() {
    this.testval = 'data passed to child component';
  }
  mycheck() {
    this.testval = 'data passed to parent component';
  }
}
