import { Component } from '@angular/core';
import { Workflow } from '../../../models/workflow';
import { WorkflowService } from '../../../services/workflow.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-workflow-delete',
  templateUrl: './workflow-delete.component.html',
  styleUrl: './workflow-delete.component.css'
})
export class WorkflowDeleteComponent {
  workflow: Workflow = {
    id: 0,
    groupId: 0,
    reply: false,
    initialMessage: '',
    followupMessage: '',
    delay: 100000
  }

  constructor(private workflowService: WorkflowService,
    public activeModal: NgbActiveModal) { }

    ngOnInit(): void{

    }

    confirmDelete(): void {
      this.workflowService.deleteWorkflow(this.workflow.id);
    }

    cancelDelete(): void {
      // Handle cancellation logic
      this.activeModal.close('dismiss');
    }
}
