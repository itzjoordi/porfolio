import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FullpageDirective } from '@fullpage/angular-fullpage/lib/fullpage.directive';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent {
  @ViewChild('fullpageRef') fp_directive!: ElementRef;
  config: FullpageDirective['options'];
  fullpage_api: FullpageDirective['fullpage_api'];

  get isVisible() {
    if (this.fullpage_api?.getActiveSection().anchor.indexOf('start') >= 0) {
      return true;
    }
    return false;
  }

  constructor(private renderer: Renderer2) {
    this.config = {
      licenseKey: '6U5K9-R9456-B3IH9-1XK6J-OZRNP',
      anchors: ['start', 'aboutme', 'experience', 'contact'],
      menu: '#menu',
      navigation: true,
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
}
