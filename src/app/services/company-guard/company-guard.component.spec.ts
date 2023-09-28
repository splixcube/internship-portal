import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGuardComponent } from './company-guard.component';

describe('CompanyGuardComponent', () => {
  let component: CompanyGuardComponent;
  let fixture: ComponentFixture<CompanyGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
