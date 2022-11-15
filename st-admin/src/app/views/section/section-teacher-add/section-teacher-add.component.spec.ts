import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeacherAddComponent } from './section-teacher-add.component';

describe('SectionTeacherAddComponent', () => {
  let component: SectionTeacherAddComponent;
  let fixture: ComponentFixture<SectionTeacherAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTeacherAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTeacherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
