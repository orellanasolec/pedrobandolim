import { Component, ViewChild, ElementRef } from '@angular/core';

declare var bootstrap: any; // Declarar 'bootstrap' para acceder a los métodos de Bootstrap
declare var jQuery: any; // Declarar 'jQuery' para acceder a los métodos de jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('navbarSupportedContent') navbar!: ElementRef; // Referencia al elemento de la barra de navegación

  constructor() {}

  // Método para cerrar la barra de navegación utilizando el método 'collapse' de Bootstrap
  closeNavbar() {
    const navbarCollapse = new bootstrap.Collapse(this.navbar.nativeElement, { toggle: false });
    navbarCollapse.hide(); // Ocultar la barra de navegación
  }
}
