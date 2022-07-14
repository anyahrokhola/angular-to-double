import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { NgCarouselComponent } from '@silmar/ng-carousel';
import { Stage } from '../../interfaces/stage.interface';

@Component({
  selector: 'stage-slider',
  templateUrl: './stage-slider.component.html',
  styleUrls: ['./stage-slider.component.scss'],
})
export class StageSliderComponent implements AfterViewInit {
  @Input() data: Stage[] = [];
  @ViewChild(NgCarouselComponent) carousel!: NgCarouselComponent;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.carousel);
  }

  public next() {
    this.carousel.next();
  }

  public prev() {
    this.carousel.prev();
  }
}
