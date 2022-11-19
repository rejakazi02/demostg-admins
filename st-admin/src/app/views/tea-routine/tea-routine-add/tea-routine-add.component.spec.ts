import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaRoutineAddComponent } from './tea-routine-add.component';

describe('TeaRoutineAddComponent', () => {
  let component: TeaRoutineAddComponent;
  let fixture: ComponentFixture<TeaRoutineAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaRoutineAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaRoutineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
