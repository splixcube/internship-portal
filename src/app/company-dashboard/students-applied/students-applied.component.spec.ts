import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAppliedComponent } from './students-applied.component';

describe('StudentsAppliedComponent', () => {
  let component: StudentsAppliedComponent;
  let fixture: ComponentFixture<StudentsAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
