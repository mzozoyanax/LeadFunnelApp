import { Component } from '@angular/core';
import { CredentialsService } from '../../../services/credentials.service';
import { Credential } from '../../../models/credential';

@Component({
  selector: 'app-credentials-create',
  templateUrl: './credentials-create.component.html',
  styleUrl: './credentials-create.component.css'
})
export class CredentialsCreateComponent {
  
  newCredentials: Credential = {
    id: 0,
    accountId: '',
    apiSecret: '',
    virtualPhone: '',
    personalPhone: ''
  };

  constructor(private credentialService: CredentialsService) { }

  ngOnInit(): void {
  }

  addCredential(): void {
    this.credentialService.addCredentials(this.newCredentials)
      .subscribe(
        () => {
          console.log('Credentials added successfully');
        },
        (error) => {
          console.error('Error adding credentials:', error);
        }
      );
  }
}
