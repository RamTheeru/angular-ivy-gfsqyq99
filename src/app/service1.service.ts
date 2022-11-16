import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class Service1Service {
  public nums: EventEmitter<number[]> = new EventEmitter<number[]>();
  constructor() {}

  savenums(ns) {
    console.log(ns);
    this.nums.emit(ns);
  }
  getVal() {
    return this.nums;
  }
}
