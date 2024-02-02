import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss'],
})
export class PersonalProjectsComponent {
  public workList = [
    {
      title: 'ng-gantt-scheduler',
      description: 'Gantt chart component to visualize and manage tasks.',
      image: 'assets/projects/gantt.webp',
      technologies: ['angular', 'typescript', 'html5', 'css3'],
      link: 'https://stackblitz.com/edit/gantt-scheduler',
      repo: 'https://github.com/itzjoordi/ng-gantt-scheduler',
    },
    {
      title: 'Short URL',
      description: 'A simple URL shortener service built with Astro.',
      image: 'assets/projects/shorturl.webp',
      technologies: ['astro', 'vercel'],
      link: 'https://petites-url.vercel.app/',
      repo: 'https://github.com/itzjoordi/short-url',
    },
  ];
}
