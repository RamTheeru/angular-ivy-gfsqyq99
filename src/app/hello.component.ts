import { Component, Input, OnInit } from '@angular/core';
import { Service1Service } from './service1.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  constructor(private ss: Service1Service) {}

  ngOnInit() {
    let pro = new Promise((y) => {
      y('promise testing...');
    });
    // this.ss.getVal().subscribe((i) => {
    //   console.log('test');
    //   console.log(i);
    // });
    pro.then((i) => {
      console.log('getting reposne from promise');
      console.log(i);
    });
  }
}
