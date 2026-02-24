import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

@Component({
  standalone: true,
  imports: [CommonModule, HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  }
}
