import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WchildComponent } from './wchild.component';

describe('WchildComponent', () => {
  let component: WchildComponent;
  let fixture: ComponentFixture<WchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
