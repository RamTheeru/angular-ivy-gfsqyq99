import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './button.component';
import { TestComponent } from './test/test.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ButtonComponent, TestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
