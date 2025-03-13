import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTasksComponent } from './complete-tasks.component';

describe('CompleteTasksComponent', () => {
  let component: CompleteTasksComponent;
  let fixture: ComponentFixture<CompleteTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
