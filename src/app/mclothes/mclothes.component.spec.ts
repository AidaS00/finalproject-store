import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclothesComponent } from './mclothes.component';

describe('MclothesComponent', () => {
  let component: MclothesComponent;
  let fixture: ComponentFixture<MclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
