import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  get isVisible() {
    if (window.scrollY < 739) {
      return true;
    }
    return false;
  }
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {}
}
