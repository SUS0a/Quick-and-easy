import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationExpoComponent } from './registration-expo.component';

describe('RegistrationExpoComponent', () => {
  let component: RegistrationExpoComponent;
  let fixture: ComponentFixture<RegistrationExpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationExpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationExpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
