import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { celciussuffix } from './celciussuffix.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxSpinnerModule],
  declarations: [AppComponent, HelloComponent, celciussuffix],
  bootstrap: [AppComponent],
})
export class AppModule {}
