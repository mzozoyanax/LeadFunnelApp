import { Component } from '@angular/core';
import { Workflow } from '../../../models/workflow';
import { WorkflowService } from '../../../services/workflow.service';

@Component({
  selector: 'app-workflow-edit',
  templateUrl: './workflow-edit.component.html',
  styleUrl: './workflow-edit.component.css'
})
export class WorkflowEditComponent {
  workflow: Workflow = {
    id: 0,
    groupId: 0,
    reply: false,
    initialMessage: '',
    followupMessage: '',
    delay: 100000
  }

  constructor(private workflowService: WorkflowService) { }

  ngOnInit(): void{

  }

  updateWorkflow(): void {
    this.workflowService.updateWorkflow(this.workflow)
      .subscribe(() => {
        // Handle success or error
      });
  }
}
