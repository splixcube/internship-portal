import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipListingComponent } from './internship-listing.component';

describe('InternshipListingComponent', () => {
  let component: InternshipListingComponent;
  let fixture: ComponentFixture<InternshipListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
