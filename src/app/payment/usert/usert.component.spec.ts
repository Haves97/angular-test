import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertComponent } from './usert.component';

describe('UsertComponent', () => {
  let component: UsertComponent;
  let fixture: ComponentFixture<UsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
