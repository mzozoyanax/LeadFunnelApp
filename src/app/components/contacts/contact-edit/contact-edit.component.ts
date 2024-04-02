import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../../models/contact';
import { ContactService } from '../../../services/contact.service';


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent {
  contact: Contacts = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    company: ''
  };

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // Fetch contact data by id and populate 'contact'
  }

  updateContact(): void {
    this.contactService.updateContact(this.contact)
      .subscribe(() => {
        // Handle success or error
      });
  }
}
