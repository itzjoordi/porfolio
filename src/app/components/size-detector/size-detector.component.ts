import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';
import { ScreenSize } from 'src/app/types/screen-sizes-enum';

/**
 * Size interface
 */
interface Size {
  id: ScreenSize;
  name: string;
  css: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-size-detector',
  templateUrl: './size-detector.component.html',
})
export class SizeDetectorComponent implements AfterViewInit {
  /**
   * Class prefix
   */
  prefix = 'is-';

  /**
   * Array of diferents sizes
   */
  sizes: Size[] = [
    {
      id: ScreenSize.XS,
      name: 'xs',
      css: `d-block d-sm-none`,
    },
    {
      id: ScreenSize.SM,
      name: 'sm',
      css: `d-none d-sm-block d-md-none`,
    },
    {
      id: ScreenSize.MD,
      name: 'md',
      css: `d-none d-md-block d-lg-none`,
    },
    {
      id: ScreenSize.LG,
      name: 'lg',
      css: `d-none d-lg-block d-xl-none`,
    },
    {
      id: ScreenSize.XL,
      name: 'xl',
      css: `d-none d-xl-block`,
    },
  ];

  /**
   * Class constructor
   *
   * @param elementRef Element of DOM who will detect screen width changes
   * @param resizeSvc Resize service
   */
  constructor(
    private elementRef: ElementRef,
    private resizeSvc: ResizeService,
  ) {}

  /**
   * Initialization: detect initial screen size
   */
  ngAfterViewInit() {
    this.detectScreenSize();
  }

  /**
   * Event: function to execute when DOM event windows:resize is executed
   */
  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  /**
   * Reads css class of the component and returns witch size is using and execute Resize service to change the observable
   */
  private detectScreenSize() {
    const currentSize = this.sizes.find((x) => {
      const el = this.elementRef.nativeElement.querySelector(
        `.${this.prefix}${x.id}`,
      );
      return window.getComputedStyle(el).display !== 'none';
    });

    if (currentSize) {
      this.resizeSvc.onResize(currentSize.id);
    }
  }

  /**
   * TrackBy to force ngFor to change only the size that has been modified
   *
   * @param index
   * @param size
   * @returns sizeId
   */
  trackBySizes(index: number, size: Size): number {
    return size.id;
  }
}
