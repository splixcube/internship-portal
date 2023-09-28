import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInternshipModalComponent } from './view-internship-modal.component';

describe('ViewInternshipModalComponent', () => {
  let component: ViewInternshipModalComponent;
  let fixture: ComponentFixture<ViewInternshipModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInternshipModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInternshipModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
