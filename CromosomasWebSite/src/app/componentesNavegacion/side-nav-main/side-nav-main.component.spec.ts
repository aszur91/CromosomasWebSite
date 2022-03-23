import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMainComponent } from './side-nav-main.component';

describe('SideNavMainComponent', () => {
  let component: SideNavMainComponent;
  let fixture: ComponentFixture<SideNavMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
