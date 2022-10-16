import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsAddComponent } from './parents-add.component';

describe('ParentsAddComponent', () => {
  let component: ParentsAddComponent;
  let fixture: ComponentFixture<ParentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
