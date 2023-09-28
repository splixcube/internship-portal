import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsAppliedComponent } from './internships-applied.component';

describe('InternshipsAppliedComponent', () => {
  let component: InternshipsAppliedComponent;
  let fixture: ComponentFixture<InternshipsAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipsAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipsAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
