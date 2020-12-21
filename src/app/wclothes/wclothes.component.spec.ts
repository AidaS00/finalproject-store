import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WclothesComponent } from './wclothes.component';

describe('WclothesComponent', () => {
  let component: WclothesComponent;
  let fixture: ComponentFixture<WclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WclothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
