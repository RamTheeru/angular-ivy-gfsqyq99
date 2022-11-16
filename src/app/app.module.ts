import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AddcurrencyPipe } from './addcurrency.pipe';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './button.component';
import { TestComponent } from './test/test.component';
import { Service1Service } from './service1.service';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    TestComponent,
    AddcurrencyPipe,
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
