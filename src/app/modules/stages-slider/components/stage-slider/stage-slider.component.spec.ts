import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageSliderComponent } from './stage-slider.component';

describe('StageSliderComponent', () => {
  let component: StageSliderComponent;
  let fixture: ComponentFixture<StageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
