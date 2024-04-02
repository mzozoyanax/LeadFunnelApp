import { Component } from '@angular/core';
import { Credential } from '../../../models/credential';
import { CredentialsService } from '../../../services/credentials.service';
import { CredentialsEditComponent } from '../credentials-edit/credentials-edit.component';
import { CredentialsDeleteComponent } from '../credentials-delete/credentials-delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credentials-list',
  templateUrl: './credentials-list.component.html',
  styleUrl: './credentials-list.component.css'
})
export class CredentialsListComponent {
  credentials: Credential[] = [];

  constructor(private credentialService: CredentialsService,
    private modalService: NgbModal) { }

    ngOnInit(): void {
      this.getCredentials();
    }
  
    getCredentials(): void {
      this.credentialService.getAllCredentials()
        .subscribe(credentials => this.credentials = credentials);
    }
  
    editCredential(credentials: Credential): void {
      const modalRef = this.modalService.open(CredentialsEditComponent, { size: 'lg' });
      modalRef.componentInstance.credentials = credentials; // Pass contact data to modal if needed
    
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
  
    deleteCredential(credentials: Credential): void {
      const modalRef = this.modalService.open(CredentialsDeleteComponent);
      modalRef.componentInstance.credentials = credentials;
  
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
