import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRoutineUpdateComponent } from './exam-routine-update.component';

describe('ExamRoutineUpdateComponent', () => {
  let component: ExamRoutineUpdateComponent;
  let fixture: ComponentFixture<ExamRoutineUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamRoutineUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamRoutineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
