import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicio2');
  contador = 0;
incrementar() {
  this.contador += 1;
}

restar() {
  this.contador -= 1;
}
resetear() {
  this.contador = 0;
}
 
}

 
