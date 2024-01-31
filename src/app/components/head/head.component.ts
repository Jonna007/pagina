import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit{

  today!: string;
  menus = [
    {
      title: 'Quiénes Somos', 
      open: false,
      links: ['Historia', 'Misión y Visión', 'Valores']
    },
    {
      title: 'Oferta Académica', 
      open: false,
      links: ['Historia', 'Misión y Visión', 'Valores']
    },
    {
      title: 'Servicios',
      open: false,
      links: ['Historia', 'Misión y Visión', 'Valores']
    },
    {
      title: 'Comunidad Educativa', 
      open: false,
      links: ['Historia', 'Misión y Visión', 'Valores']
    },
    {
      title: 'Contáctenos', 
      open: false,
      links: ['Historia', 'Misión y Visión', 'Valores']
    },
    {
      title: 'ESEMTIA',
    },
  ];
ngOnInit(): void {
  this.today = new Date().toLocaleDateString('es-ES', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

}

  toggleDropdown(menu: any): void {
    menu.open = !menu.open;

    if(menu.open) {
      this.menus.forEach(m => {
        if (m !== menu) m.open = false;
      });
    }
  }
}