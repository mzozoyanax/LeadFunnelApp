import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowgroupListComponent } from './workflowgroup-list.component';

describe('WorkflowgroupListComponent', () => {
  let component: WorkflowgroupListComponent;
  let fixture: ComponentFixture<WorkflowgroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowgroupListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkflowgroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
