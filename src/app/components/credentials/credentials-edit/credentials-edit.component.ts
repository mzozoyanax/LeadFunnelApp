import { Component } from '@angular/core';
import { CredentialsService } from '../../../services/credentials.service';
import { Credential } from '../../../models/credential';

@Component({
  selector: 'app-credentials-edit',
  templateUrl: './credentials-edit.component.html',
  styleUrl: './credentials-edit.component.css'
})
export class CredentialsEditComponent {
  credential: Credential = {
    id: 0,
    accountId: '',
    apiSecret: '',
    virtualPhone: '',
    personalPhone: ''
  };

  constructor(private credentialService: CredentialsService) { }

  ngOnInit(): void {
    // Fetch contact data by id and populate 'contact'
  }

  updateCredentials(): void {
    this.credentialService.updateCredentials(this.credential)
      .subscribe(() => {
        // Handle success or error
      });
  }
}
