import { Component } from '@angular/core';
import { Workflow } from '../../../models/workflow';
import { WorkflowService } from '../../../services/workflow.service';

@Component({
  selector: 'app-workflow-create',
  templateUrl: './workflow-create.component.html',
  styleUrl: './workflow-create.component.css'
})
export class WorkflowCreateComponent {
  newWorkflow: Workflow = {
    id: 0,
    groupId: 0,
    reply: false,
    initialMessage: '',
    followupMessage: '',
    delay: 100000
  };

  constructor(private workflowServce: WorkflowService) { }

  ngOnInit(): void {
  }

  addWorkflow(): void {
    this.workflowServce.addWorkflow(this.newWorkflow)
      .subscribe(
        () => {
          console.log('Workflow added successfully');
        },
        (error) => {
          console.error('Error adding workflow:', error);
        }
      );
  }
}
