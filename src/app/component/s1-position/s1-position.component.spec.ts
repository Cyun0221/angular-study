import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1PositionComponent } from './s1-position.component';

describe('S1PositionComponent', () => {
  let component: S1PositionComponent;
  let fixture: ComponentFixture<S1PositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S1PositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S1PositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
