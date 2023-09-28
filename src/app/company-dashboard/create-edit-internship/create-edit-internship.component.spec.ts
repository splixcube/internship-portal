import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditInternshipComponent } from './create-edit-internship.component';

describe('CreateEditInternshipComponent', () => {
  let component: CreateEditInternshipComponent;
  let fixture: ComponentFixture<CreateEditInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditInternshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
