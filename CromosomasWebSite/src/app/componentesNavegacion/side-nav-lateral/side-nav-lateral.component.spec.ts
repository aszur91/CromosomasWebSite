import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavLateralComponent } from './side-nav-lateral.component';

describe('SideNavLateralComponent', () => {
  let component: SideNavLateralComponent;
  let fixture: ComponentFixture<SideNavLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
