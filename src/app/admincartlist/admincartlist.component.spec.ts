import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincartlistComponent } from './admincartlist.component';

describe('AdmincartlistComponent', () => {
  let component: AdmincartlistComponent;
  let fixture: ComponentFixture<AdmincartlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincartlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
