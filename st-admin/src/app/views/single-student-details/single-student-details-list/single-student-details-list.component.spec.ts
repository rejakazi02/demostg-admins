import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStudentDetailsListComponent } from './single-student-details-list.component';

describe('SingleStudentDetailsListComponent', () => {
  let component: SingleStudentDetailsListComponent;
  let fixture: ComponentFixture<SingleStudentDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleStudentDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleStudentDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
