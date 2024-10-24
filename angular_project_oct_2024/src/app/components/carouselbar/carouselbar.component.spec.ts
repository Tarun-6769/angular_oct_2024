import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselbarComponent } from './carouselbar.component';

describe('CarouselbarComponent', () => {
  let component: CarouselbarComponent;
  let fixture: ComponentFixture<CarouselbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
