import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaRoutineListComponent } from './tea-routine-list.component';

describe('TeaRoutineListComponent', () => {
  let component: TeaRoutineListComponent;
  let fixture: ComponentFixture<TeaRoutineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaRoutineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaRoutineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
