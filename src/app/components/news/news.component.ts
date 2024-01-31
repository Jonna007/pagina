import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
  
  titles = ["Cuenca, la UETS te saluda!", "Acceso a Educacion Superiror", "1er Consurso de Pintura", "Promo: Festival Atletico Don Bosco 8K"];
  currentTitle = 0;
  today!: string;

  ngOnInit(): void {
    setInterval(() => {
        this.currentTitle = (this.currentTitle + 1) % this.titles.length;
    }, 3000); // Cambia cada 3 segundos
    
    this.today = new Date().toLocaleDateString('es-ES', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}

toggleDropdown(menu: any): void {
  menu.open = !menu.open;


}
}