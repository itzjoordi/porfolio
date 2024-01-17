import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  AngularFullpageModule,
  FullpageDirective,
} from '@fullpage/angular-fullpage';
import { fullpageOptions } from 'fullpage.js/dist/fullpage.extensions.min';
import { AboutMeComponent } from 'src/app/components/about-me/about-me.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AngularFullpageModule,
    MainComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements AfterViewInit {
  @ViewChild(FullpageDirective) fullpageDirective!: FullpageDirective;
  config: fullpageOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fullpageApi: any;

  get isVisible() {
    if (
      this.fullpageApi === undefined ||
      (this.fullpageApi &&
        this.fullpageApi
          .getActiveSection()
          .anchor.toString()
          .indexOf('start') >= 0)
    ) {
      return true;
    }
    return false;
  }

  constructor() {
    this.config = {
      licenseKey: 'LQXB6-780RK-1U2H9-1KZ3I-GWXMO',
      anchors: ['start', 'aboutme', 'experience', 'contact'],
      menu: '#menu',
      navigation: true,
      credits: {
        enabled: false,
      },
    };
  }

  ngAfterViewInit() {
    this.fullpageApi = this.fullpageDirective.fullpageApi;
  }
}
