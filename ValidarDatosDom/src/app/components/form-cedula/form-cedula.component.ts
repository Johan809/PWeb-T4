import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'form-cedula',
  templateUrl: './form-cedula.component.html',
  styleUrls: ['./form-cedula.component.html'],
})
export class FormCedula {
  public dirUrl: string;
  public dominican: object;

  constructor(private xhttp: HttpClient) {
    this.dirUrl = 'https://api.adamix.net/apec/cedula/';
    this.dominican = {
      cedula: '',
      foto: '../../../assets/images/default.jpg',
      nombre: 'Nombre',
      apellido: 'Completo',
      nacimiento: '',
      edad: 0,
      zodiaco: '',
    };
  }

  public getData(cedula: string) {
    var url = this.dirUrl + cedula;
    this.xhttp.get(url).subscribe(
      (data) => {
        if (data['ok'] === false) {
          alert('Esa persona no existe.');
          return;
        } else {
          this.dominican['cedula'] = cedula;
          this.dominican['nombre'] = this.camelCase(data['Nombres']);
          this.dominican['apellido'] =
            this.camelCase(data['Apellido1']) +
            ' ' +
            this.camelCase(data['Apellido2']);
          this.dominican['foto'] = data['foto'];
          var nacDate = data['FechaNacimiento'].split(' ')[0];
          this.dominican['nacimiento'] = nacDate;
          this.dominican['edad'] = this.getOld(nacDate);
          this.dominican['zodiaco'] = this.getSign(nacDate);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  private camelCase(str: string) {
    str = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
    return str;
  }

  private getOld(nacDate: string) {
    var today = new Date();
    var birthday = new Date(nacDate);
    var old = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) old--;
    return old;
  }

  private getSign(nacDate: string) {
    var day: number, month: number, sign: string;
    month = parseInt(nacDate.split('-')[1]);
    day = parseInt(nacDate.split('-')[2]);

    if ((day >= 21 && month == 3) || (day <= 20 && month == 4)) sign = 'Aries';
    if ((day >= 24 && month == 9) || (day <= 23 && month == 10)) sign = 'Libra';
    if ((day >= 21 && month == 4) || (day <= 21 && month == 5)) sign = 'Tauro';
    if ((day >= 24 && month == 10) || (day <= 22 && month == 11))
      sign = 'Escorpio';
    if ((day >= 22 && month == 5) || (day <= 21 && month == 6))
      sign = 'G\u00E9minis';
    if ((day >= 23 && month == 11) || (day <= 21 && month == 12))
      sign = 'Sagitario';
    if ((day >= 21 && month == 6) || (day <= 23 && month == 7))
      sign = 'C\u00E1ncer';
    if ((day >= 22 && month == 12) || (day <= 20 && month == 1))
      sign = 'Capricornio';
    if ((day >= 24 && month == 7) || (day <= 23 && month == 8)) sign = 'Leo';
    if ((day >= 21 && month == 1) || (day <= 19 && month == 2))
      sign = 'Acuario';
    if ((day >= 24 && month == 8) || (day <= 23 && month == 9)) sign = 'Virgo';
    if ((day >= 20 && month == 2) || (day <= 20 && month == 3)) sign = 'Piscis';

    return sign;
  }
}
