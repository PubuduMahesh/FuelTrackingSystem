import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFuelChargeComponent } from './new-fuel-charge.component';

describe('NewFuelChargeComponent', () => {
  let component: NewFuelChargeComponent;
  let fixture: ComponentFixture<NewFuelChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFuelChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFuelChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
