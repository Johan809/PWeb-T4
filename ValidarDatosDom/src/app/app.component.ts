import { Component } from '@angular/core';

import { About } from './components/about-me/about.component';
import { FormCedula } from './components/form-cedula/form-cedula.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string;
  public view: any;

  constructor() {
    this.Validate();
  }

  public AboutMe() {
    this.title = 'Acerca De';
    this.view = About;
  }

  public Validate() {
    this.title = 'Validar Datos de Dominicanos';
    this.view = FormCedula;
  }
}
