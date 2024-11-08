import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'babyShowerAngelaPaola';
 
  iniciarApp() {
    console.log('La aplicación ha iniciado correctamente.');
    // Aquí puedes agregar cualquier lógica adicional que necesites
  }

  // Método ngOnInit que se ejecuta al cargar el componente
  ngOnInit(): void {
    this.iniciarApp();
  }


}
