import { Component, ViewChild } from '@angular/core';
import { NgCarouselComponent } from '@silmar/ng-carousel';

@Component({
  selector: 'websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss'],
})
export class WebsitesComponent {
  @ViewChild(NgCarouselComponent) carousel!: NgCarouselComponent;
  constructor() {}

  public next() {
    this.carousel.next();
  }

  public prev() {
    this.carousel.prev();
  }
}
