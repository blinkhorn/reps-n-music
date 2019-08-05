import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountySelectComponent } from './county-select.component';

describe('CountySelectComponent', () => {
  let component: CountySelectComponent;
  let fixture: ComponentFixture<CountySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
