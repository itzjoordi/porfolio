import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from 'src/app/components/about-me/about-me.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { PersonalProjectsComponent } from 'src/app/components/personal-projects/personal-projects.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MainComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    PersonalProjectsComponent,
    ContactComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  activeSection = 'start';

  onScroll(event: Event) {
    const container = event.target as HTMLElement;
    const sections = container.querySelectorAll('.section');
    const scrollTop = container.scrollTop;
    const viewportHeight = container.clientHeight;

    sections.forEach((section) => {
      const el = section as HTMLElement;
      const sectionTop = el.offsetTop;
      if (scrollTop >= sectionTop - viewportHeight / 2) {
        this.activeSection = el.dataset['anchor'] || 'start';
      }
    });
  }

  scrollTo(anchor: string) {
    const el = document.querySelector(`[data-anchor="${anchor}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
