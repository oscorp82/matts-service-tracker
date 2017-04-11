import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDoneComponent } from './service-done.component';

describe('ServiceDoneComponent', () => {
  let component: ServiceDoneComponent;
  let fixture: ComponentFixture<ServiceDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
