import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaRoutineUpdateComponent } from './tea-routine-update.component';

describe('TeaRoutineUpdateComponent', () => {
  let component: TeaRoutineUpdateComponent;
  let fixture: ComponentFixture<TeaRoutineUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaRoutineUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaRoutineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
