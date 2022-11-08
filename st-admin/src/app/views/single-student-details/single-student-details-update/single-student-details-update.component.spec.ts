import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStudentDetailsUpdateComponent } from './single-student-details-update.component';

describe('SingleStudentDetailsUpdateComponent', () => {
  let component: SingleStudentDetailsUpdateComponent;
  let fixture: ComponentFixture<SingleStudentDetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStudentDetailsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStudentDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
