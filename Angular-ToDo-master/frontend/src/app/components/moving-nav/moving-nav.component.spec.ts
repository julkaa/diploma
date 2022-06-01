import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingNavComponent } from './moving-nav.component';

describe('MovingNavComponent', () => {
  let component: MovingNavComponent;
  let fixture: ComponentFixture<MovingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
