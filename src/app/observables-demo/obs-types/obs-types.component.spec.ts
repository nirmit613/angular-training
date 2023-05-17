import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsTypesComponent } from './obs-types.component';

describe('ObsTypesComponent', () => {
  let component: ObsTypesComponent;
  let fixture: ComponentFixture<ObsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
