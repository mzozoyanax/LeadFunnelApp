import { Component } from '@angular/core';
import { WorkflowGroup } from '../../../models/workflowgroup';
import { WorkflowgroupService } from '../../../services/workflowgroup.service';

@Component({
  selector: 'app-workflowgroup-edit',
  templateUrl: './workflowgroup-edit.component.html',
  styleUrl: './workflowgroup-edit.component.css'
})
export class WorkflowgroupEditComponent {
  workflowGroup: WorkflowGroup = {
    id: 0,
    groupId: 0,
    name: '',
    running: false
  }

  constructor(private workflowGroupService: WorkflowgroupService) { }

  ngOnInit(): void{

  }

  updateWorkflowGroup(): void {
    this.workflowGroupService.updateWorkflowGroups(this.workflowGroup)
      .subscribe(() => {
        // Handle success or error
      });
  }
}
