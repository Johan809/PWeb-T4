import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormCedula } from './components/form-cedula/form-cedula.component';
import { About } from './components/about-me/about.component';

@NgModule({
  declarations: [AppComponent, FormCedula, About],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
