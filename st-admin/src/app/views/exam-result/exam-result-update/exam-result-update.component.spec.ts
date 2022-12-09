import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultUpdateComponent } from './exam-result-update.component';

describe('ExamResultUpdateComponent', () => {
  let component: ExamResultUpdateComponent;
  let fixture: ComponentFixture<ExamResultUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamResultUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamResultUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
