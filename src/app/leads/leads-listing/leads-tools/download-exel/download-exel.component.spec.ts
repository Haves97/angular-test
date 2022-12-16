import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadExelComponent } from './download-exel.component';

describe('DownloadExelComponent', () => {
  let component: DownloadExelComponent;
  let fixture: ComponentFixture<DownloadExelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadExelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadExelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
