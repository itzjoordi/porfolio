import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SizeDetectorComponent } from './size-detector.component';

/**
 * ResizeModule
 */
@NgModule({
  declarations: [SizeDetectorComponent],
  imports: [CommonModule],
  exports: [SizeDetectorComponent]
})
export class SizeDetectorModule {}
