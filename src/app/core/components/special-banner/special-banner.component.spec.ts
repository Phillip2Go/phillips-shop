import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialBannerComponent } from './special-banner.component';

describe('SpecialBannerComponent', () => {
  let component: SpecialBannerComponent;
  let fixture: ComponentFixture<SpecialBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
