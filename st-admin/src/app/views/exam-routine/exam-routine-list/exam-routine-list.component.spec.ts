import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRoutineListComponent } from './exam-routine-list.component';

describe('ExamRoutineListComponent', () => {
  let component: ExamRoutineListComponent;
  let fixture: ComponentFixture<ExamRoutineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamRoutineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamRoutineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
