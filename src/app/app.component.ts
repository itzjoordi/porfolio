import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { SizeDetectorComponent } from './components/size-detector/size-detector.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { ResizeService } from './services/resize.service';
import { ScreenSize } from './types/screen-sizes-enum';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SizeDetectorComponent,
    DesktopComponent,
    MobileComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  get isMobileScreen() {
    return this.resizeService.isMobileScreen;
  }

  constructor(private resizeService: ResizeService) {}

  ngOnInit(): void {
    this.resizeService.onResize$.pipe(delay(0)).subscribe((x) => {
      this.resizeService.isMobileScreen =
        x === ScreenSize.XS || x === ScreenSize.SM || x === ScreenSize.MD;
      console.log('isMobileScreen: ', this.resizeService.isMobileScreen);
    });
  }

  toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  }
}
