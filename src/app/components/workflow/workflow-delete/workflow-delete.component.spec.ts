import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDeleteComponent } from './workflow-delete.component';

describe('WorkflowDeleteComponent', () => {
  let component: WorkflowDeleteComponent;
  let fixture: ComponentFixture<WorkflowDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkflowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
