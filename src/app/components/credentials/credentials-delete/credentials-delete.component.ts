import { Component } from '@angular/core';
import { Credential } from '../../../models/credential';
import { CredentialsService } from '../../../services/credentials.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credentials-delete',
  templateUrl: './credentials-delete.component.html',
  styleUrl: './credentials-delete.component.css'
})
export class CredentialsDeleteComponent {
  credentials: Credential = {
    id: 0,
    accountId: '',
    apiSecret: '',
    virtualPhone: '',
    personalPhone: ''
  };

  constructor(private credentialsService: CredentialsService,
    public activeModal: NgbActiveModal) { }
    
    ngOnInit(): void {
      // Fetch contact data by id and populate 'contact'
    }
  
    confirmDelete(): void {
      this.credentialsService.deleteCredentials(this.credentials.id)
        .subscribe(() => {
          // Handle success or error
        });
    }
  
    cancelDelete(): void {
      // Handle cancellation logic
      this.activeModal.close('dismiss');
    }
}
