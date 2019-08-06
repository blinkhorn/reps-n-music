import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyCompareSelectComponent } from './county-compare-select.component';

describe('CountyCompareSelectComponent', () => {
  let component: CountyCompareSelectComponent;
  let fixture: ComponentFixture<CountyCompareSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyCompareSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyCompareSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
