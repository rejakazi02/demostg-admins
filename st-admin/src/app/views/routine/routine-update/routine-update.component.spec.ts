import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineUpdateComponent } from './routine-update.component';

describe('RoutineUpdateComponent', () => {
  let component: RoutineUpdateComponent;
  let fixture: ComponentFixture<RoutineUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
