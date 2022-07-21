import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ResizeService } from './services/resize.service';
import { ScreenSize } from './types/screen-sizes-enum';

@Component({
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
}
