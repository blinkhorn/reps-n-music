import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyCompareComponent } from './county-compare.component';

describe('CountyCompareComponent', () => {
  let component: CountyCompareComponent;
  let fixture: ComponentFixture<CountyCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
