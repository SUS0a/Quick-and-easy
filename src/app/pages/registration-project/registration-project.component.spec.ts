import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationProjectComponent } from './registration-project.component';

describe('RegistrationProjectComponent', () => {
  let component: RegistrationProjectComponent;
  let fixture: ComponentFixture<RegistrationProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
