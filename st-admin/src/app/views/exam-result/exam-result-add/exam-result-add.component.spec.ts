import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultAddComponent } from './exam-result-add.component';

describe('ExamResultAddComponent', () => {
  let component: ExamResultAddComponent;
  let fixture: ComponentFixture<ExamResultAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamResultAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamResultAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
