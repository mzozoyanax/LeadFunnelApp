import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowgroupEditComponent } from './workflowgroup-edit.component';

describe('WorkflowgroupEditComponent', () => {
  let component: WorkflowgroupEditComponent;
  let fixture: ComponentFixture<WorkflowgroupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowgroupEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkflowgroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
