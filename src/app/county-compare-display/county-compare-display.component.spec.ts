import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyCompareDisplayComponent } from './county-compare-display.component';

describe('CountyCompareDisplayComponent', () => {
  let component: CountyCompareDisplayComponent;
  let fixture: ComponentFixture<CountyCompareDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyCompareDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyCompareDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
