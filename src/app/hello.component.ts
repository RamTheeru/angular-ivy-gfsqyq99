import { Component, Input, OnInit } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';
import { Service1Service } from './service1.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  constructor(private ss: Service1Service) {}
  // Subsc: Subscription;
  ngOnInit() {
    let pro = new Promise((resolve) => {
      console.log('creating Promise....');
      // resolve('promise testing...');
      resolve('sayanna');
      resolve('ram');
      resolve('ravi');
    });
    // this.ss.getVal().subscribe((i) => {
    //   console.log('test');
    //   console.log(i);
    // });
    // pro.then((i) => {
    //   console.log('getting reposne from promise');
    //   console.log(i);
    // });

    let ob = new Observable((o) => {
      console.log('creating Observable....');
      setTimeout(() => {
        o.next('observable testing');
        o.next('sayanna');
        o.next('ram');
        o.next(200);
      }, 4000);
    });
    console.log('Subscription started');
    let Subsc = ob.subscribe((i) => {
      console.log('getting reposne from observable');
      console.log(i);
    });
    console.log('all finished');
    //Subsc.unsubscribe();
  }
}
