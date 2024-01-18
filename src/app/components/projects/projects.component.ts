import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public workList = [
    {
      title: 'Banc Sabadell Online',
      description:
        'Development of applications for the web channels of Banc Sabadell.',
      image: 'assets/projects/sabadell.png',
      technologies: ['html5', 'javascript', 'css3', 'jsp', 'java'],
      link: '',
      repo: '',
    },
    {
      title: 'Mercadona Internal Apps',
      description:
        'Development of web applications to enhance the internal management of various business areas at Mercadona, such as construction and finance.',
      image: 'assets/projects/mercadona.png',
      technologies: ['angular', 'javasb', 'mongodb', 'jenkins', 'spinnaker'],
      link: '',
      repo: '',
    },
    {
      title: 'Telxius Traffic Control',
      description:
        'Enhanced web application for Security Portal, optimizing traffic management, alerts, and mitigations.',
      image: 'assets/projects/telxius.png',
      technologies: ['angular', 'python', 'docker', 'postgre', 'openshift'],
      link: '',
      repo: '',
    },
  ];
}
