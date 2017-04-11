import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePartsComponent } from './service-parts.component';

describe('ServicePartsComponent', () => {
  let component: ServicePartsComponent;
  let fixture: ComponentFixture<ServicePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
