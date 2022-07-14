import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgCarouselModule } from '@silmar/ng-carousel';
import { HammerModule } from '@angular/platform-browser';
import { StageSliderComponent } from './components/stage-slider/stage-slider.component';
import { StagesComponent } from './components/stages/stages.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, HammerModule, NgCarouselModule],
  declarations: [StageSliderComponent,StagesComponent],
  exports:[StageSliderComponent, StagesComponent]
})
export class StagesSliderModule {}
