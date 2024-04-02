import { Component } from '@angular/core';
import { WorkflowGroup } from '../../../models/workflowgroup';
import { WorkflowgroupService } from '../../../services/workflowgroup.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkflowgroupEditComponent } from '../workflowgroup-edit/workflowgroup-edit.component';
import { WorkflowEditComponent } from '../../workflow/workflow-edit/workflow-edit.component';
import { WorkflowDeleteComponent } from '../../workflow/workflow-delete/workflow-delete.component';

@Component({
  selector: 'app-workflowgroup-list',
  templateUrl: './workflowgroup-list.component.html',
  styleUrl: './workflowgroup-list.component.css'
})
export class WorkflowgroupListComponent {
  workflowGroups: WorkflowGroup[] = [];

  constructor(private workflowgroupService: WorkflowgroupService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getWorkflowGroups();
  }

  getWorkflowGroups(): void {
    this.workflowgroupService.getAllWorkflowGroups()
      .subscribe(workflowGroups => this.workflowGroups = workflowGroups);
  }

  editWorkflowGroup(workflowgroup: WorkflowGroup): void {
    const modalRef = this.modalService.open(WorkflowgroupEditComponent, { size: 'lg' });
    modalRef.componentInstance.workflowGroup = workflowgroup; // Pass contact data to modal if needed
  
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

  deleteWorkflowGroup(workflowGroup: WorkflowGroup): void {
    const modalRef = this.modalService.open(WorkflowDeleteComponent);
    modalRef.componentInstance.workflowGroup = workflowGroup;

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
