import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class About {
  public title: string;
  public nombreC: string;
  public perfil: string;
  public correo: string;
  public tel: string;
  public precio: number;

  constructor() {
    this.title = 'Acerca de mi';
    this.nombreC = 'Johan Alonzo';
    this.perfil = '../../../assets/images/perfil.jpeg';
    this.correo = 'Johan809@hotmail.com';
    this.tel = '849-405-8957';
    this.precio = 2000;
  }
}
