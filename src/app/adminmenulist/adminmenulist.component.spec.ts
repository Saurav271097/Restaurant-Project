import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmenulistComponent } from './adminmenulist.component';

describe('AdminmenulistComponent', () => {
  let component: AdminmenulistComponent;
  let fixture: ComponentFixture<AdminmenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmenulistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
