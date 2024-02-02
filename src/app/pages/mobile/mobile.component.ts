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
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {}
