import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowgroupDeleteComponent } from './workflowgroup-delete.component';

describe('WorkflowgroupDeleteComponent', () => {
  let component: WorkflowgroupDeleteComponent;
  let fixture: ComponentFixture<WorkflowgroupDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowgroupDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkflowgroupDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
