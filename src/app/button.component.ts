import { Component, Input } from '@angular/core';

@Component({
  selector: 'btt',
  template: `<button>{{name}}</button>`,
  styles: [`button { background-color:blue;color:white; }`],
})
export class ButtonComponent {
  //@Input() name: string;
  name: string = 'test';
}
