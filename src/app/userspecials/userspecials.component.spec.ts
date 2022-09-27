import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspecialsComponent } from './userspecials.component';

describe('UserspecialsComponent', () => {
  let component: UserspecialsComponent;
  let fixture: ComponentFixture<UserspecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserspecialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserspecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
