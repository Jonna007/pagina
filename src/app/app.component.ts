import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './components/head/head.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FootComponent } from './components/foot/foot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadComponent,MainComponent,FooterComponent,FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina';
}
