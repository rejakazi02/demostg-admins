import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineAddComponent } from './routine-add.component';

describe('RoutineAddComponent', () => {
  let component: RoutineAddComponent;
  let fixture: ComponentFixture<RoutineAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
