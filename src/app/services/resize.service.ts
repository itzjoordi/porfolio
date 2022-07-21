import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ScreenSize } from 'src/app/types/screen-sizes-enum';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  /**
   * Subject for emitting the current screen size
   */
  private resizeSubject: Subject<ScreenSize>;

  /**
   * Defines if is a mobile screen or not
   */
  public isMobileScreen: boolean | undefined;

  /**
   * Class constructor
   */
  constructor() {
    this.resizeSubject = new Subject();
  }

  /**
   * Returns a observable to get screen size
   */
  get onResize$(): Observable<ScreenSize> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  /**
   * Push the value to the resize stream.
   *
   * @param size
   */
  onResize(size: ScreenSize) {
    this.resizeSubject.next(size);
  }
}
