import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAuthComponent } from './sidebar-auth.component';

describe('SidebarAuthComponent', () => {
  let component: SidebarAuthComponent;
  let fixture: ComponentFixture<SidebarAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
