import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpaymentlistComponent } from './adminpaymentlist.component';

describe('AdminpaymentlistComponent', () => {
  let component: AdminpaymentlistComponent;
  let fixture: ComponentFixture<AdminpaymentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpaymentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
