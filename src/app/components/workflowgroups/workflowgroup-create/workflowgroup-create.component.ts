import { Component } from '@angular/core';
import { WorkflowGroup } from '../../../models/workflowgroup';
import { WorkflowgroupService } from '../../../services/workflowgroup.service';

@Component({
  selector: 'app-workflowgroup-create',
  templateUrl: './workflowgroup-create.component.html',
  styleUrl: './workflowgroup-create.component.css'
})
export class WorkflowgroupCreateComponent {
  newWorkflowGroup: WorkflowGroup = {
    id: 0,
    groupId: 0,
    name: '',
    running: false
  };

  constructor(private workflowGroupService: WorkflowgroupService) { }

  ngOnInit(): void {
  }

  addWorkflowGroup(): void {
    this.workflowGroupService.addWorkflowGroups(this.newWorkflowGroup)
      .subscribe(
        () => {
          console.log('Workflow added successfully');
        },(error) => {
          console.error('Error adding workflow:', error);
        }
      );
  }
}
