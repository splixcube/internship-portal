import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInternshipComponent } from './view-internship.component';

describe('ViewInternshipComponent', () => {
  let component: ViewInternshipComponent;
  let fixture: ComponentFixture<ViewInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInternshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
