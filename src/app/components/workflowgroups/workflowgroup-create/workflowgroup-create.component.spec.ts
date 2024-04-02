import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowgroupCreateComponent } from './workflowgroup-create.component';

describe('WorkflowgroupCreateComponent', () => {
  let component: WorkflowgroupCreateComponent;
  let fixture: ComponentFixture<WorkflowgroupCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkflowgroupCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkflowgroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
