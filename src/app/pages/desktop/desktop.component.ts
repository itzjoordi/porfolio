import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit {
  @ViewChild('fullpageRef') fp_directive!: ElementRef;
  config: any;
  fullpage_api: any;

  get isVisible() {
    if (this.fullpage_api?.getActiveSection().anchor.indexOf('start') >= 0) {
      return true;
    }
    return false;
  }

  constructor(private renderer: Renderer2) {
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['start', 'aboutme', 'experience', 'contact'],
      menu: '#menu',
      navigation: true,
      sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', 'FFFFFF', '#FFFFFF'],

      // events callback
      afterLoad: (origin: any, destination: any, direction: any) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width: any, height: any) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (
        section: any,
        origin: any,
        destination: any,
        direction: any
      ) => {
        // console.log(destination);
      },
    };
  }

  ngOnInit(): void {}

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
}
