import { Component } from '@angular/core';
import { WorkflowGroup } from '../../../models/workflowgroup';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkflowgroupService } from '../../../services/workflowgroup.service';

@Component({
  selector: 'app-workflowgroup-delete',
  templateUrl: './workflowgroup-delete.component.html',
  styleUrl: './workflowgroup-delete.component.css'
})
export class WorkflowgroupDeleteComponent {
  workflowgroup: WorkflowGroup = {
    id: 0,
    groupId: 0,
    name: '',
    running: false
  }

  constructor(private workflowGroupService: WorkflowgroupService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // Fetch contact data by id and populate 'contact'
  }

  confirmDelete(): void {
    this.workflowGroupService.deleteWorkflowGroups(this.workflowgroup.id)
      .subscribe(() => {
        // Handle success or error
      });
  }

  cancelDelete(): void {
    // Handle cancellation logic
    this.activeModal.close('dismiss');
  }
}
