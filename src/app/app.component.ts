import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './components/head/head.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FootComponent } from './components/foot/foot.component';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadComponent,MainComponent,FooterComponent,FootComponent, CommonModule, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina';
}

export class AppMenuComponent {
  menus = [
    {
      title: 'Quiénes Somos',
      open: false,
      links: ['Historia', 'Misión y Visión', 'Valores']
    },
    {
      title: 'Oferta Educativa',
      open: false,
      links: ['Carreras', 'Cursos', 'Programas Especiales']
    },
    {
      title: 'Servicios',
      open: false,
      links: ['Biblioteca', 'Asesoría', 'Soporte Técnico']
    },
    {
      title: 'Comunidad Educativa',
      open: false,
      links: ['Estudiantes', 'Profesores', 'Egresados']
    },
    {
      title: 'Contáctenos',
      open: false,
      links: ['Contacto', 'Ubicación', 'Horarios']
    },
    {
      title: 'ESEMTIA',
      open: false,
      links: ['Plataforma', 'Soporte', 'Recursos']
    }
  ];

  toggleDropdown(menu: any): void {
    // This function toggles the 'open' property of a menu item.
    menu.open = !menu.open;
    // Optionally close other menus when one is opened
    this.menus.forEach(m => {
      if (m !== menu) {
        m.open = false;
      }
    });
  }
}