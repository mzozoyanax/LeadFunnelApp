import { Component } from '@angular/core';
import { Workflow } from '../../../models/workflow';
import { WorkflowService } from '../../../services/workflow.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkflowEditComponent } from '../workflow-edit/workflow-edit.component';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrl: './workflow-list.component.css'
})
export class WorkflowListComponent {
  workflows: Workflow[] = [];

  constructor(private workflowService: WorkflowService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getWorkflows();
  }

  getWorkflows(): void {
    this.workflowService.getAllWorkflow()
      .subscribe(workflows => this.workflows = workflows);
  }

  editWorkflow(workflow: Workflow): void {
    const modalRef = this.modalService.open(WorkflowEditComponent, { size: 'lg' });
    modalRef.componentInstance.workflow = workflow; // Pass contact data to modal if needed
  
    modalRef.result.then((result) => {
      if (result === 'success') {
        // Handle success
      } else {
        // Handle failure or dismissal
      }
    }, (reason) => {
      // Handle dismissal
    });
  }

  deleteWorkflow(workflow: Workflow): void {
    const modalRef = this.modalService.open(WorkflowEditComponent);
    modalRef.componentInstance.workflow = workflow;

    modalRef.result.then((result) => {
      if (result === 'delete') {
        // Handle deletion logic if confirmed
      } else {
        // Handle cancellation or dismissal
      }
    }, (reason) => {
      // Handle dismissal
    });
  }
}
