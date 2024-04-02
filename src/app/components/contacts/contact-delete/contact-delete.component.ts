import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../../models/contact';
import { ContactService } from '../../../services/contact.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrl: './contact-delete.component.css'
})
export class ContactDeleteComponent {
  contact: Contacts = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    company: ''
  };

  constructor(private contactService: ContactService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // Fetch contact data by id and populate 'contact'
  }

  confirmDelete(): void {
    this.contactService.deleteContact(this.contact.id)
      .subscribe(() => {
        // Handle success or error
      });
  }

  cancelDelete(): void {
    // Handle cancellation logic
    this.activeModal.close('dismiss');
  }
}
