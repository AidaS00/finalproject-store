import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WclothComponent } from './wcloth.component';

describe('WclothComponent', () => {
  let component: WclothComponent;
  let fixture: ComponentFixture<WclothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WclothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WclothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
