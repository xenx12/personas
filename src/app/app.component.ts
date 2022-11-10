import { Component } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Las variables van dentro de esta clase:
export class AppComponent {
  title = 'Personas';
  nombre = 'Abraham';
  edad = 29;
  estadocivil = 'Casado';
  estatura = 170;
  




}
