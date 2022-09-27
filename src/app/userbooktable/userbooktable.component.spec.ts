import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbooktableComponent } from './userbooktable.component';

describe('UserbooktableComponent', () => {
  let component: UserbooktableComponent;
  let fixture: ComponentFixture<UserbooktableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbooktableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserbooktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
