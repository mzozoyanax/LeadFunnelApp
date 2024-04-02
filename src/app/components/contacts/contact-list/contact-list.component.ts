import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { Contacts } from '../../../models/contact';
import { ContactService } from '../../../services/contact.service';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';
import { ContactDeleteComponent } from '../contact-delete/contact-delete.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent {
  contacts: Contacts[] = [];

  constructor(private contactService: ContactService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getAllContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  editContact(contact: Contacts): void {
    const modalRef = this.modalService.open(ContactEditComponent, { size: 'lg' });
    modalRef.componentInstance.contact = contact; // Pass contact data to modal if needed
  
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

  deleteContact(contact: Contacts): void {
    const modalRef = this.modalService.open(ContactDeleteComponent);
    modalRef.componentInstance.contact = contact;

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
