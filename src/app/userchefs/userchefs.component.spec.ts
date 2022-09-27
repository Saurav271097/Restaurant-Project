import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchefsComponent } from './userchefs.component';

describe('UserchefsComponent', () => {
  let component: UserchefsComponent;
  let fixture: ComponentFixture<UserchefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserchefsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserchefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
