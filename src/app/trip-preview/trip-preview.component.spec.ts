import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPreviewComponent } from './trip-preview.component';

describe('TripPreviewComponent', () => {
  let component: TripPreviewComponent;
  let fixture: ComponentFixture<TripPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
