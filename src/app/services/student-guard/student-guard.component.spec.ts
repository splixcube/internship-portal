import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGuardComponent } from './student-guard.component';

describe('StudentGuardComponent', () => {
  let component: StudentGuardComponent;
  let fixture: ComponentFixture<StudentGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
