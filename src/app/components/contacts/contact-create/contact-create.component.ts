import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../../models/contact';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrl: './contact-create.component.css'
})
export class ContactCreateComponent implements OnInit {
  
  newContact: Contacts = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    company: ''
  };

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  addContact(): void {
    this.contactService.addContact(this.newContact)
      .subscribe(
        () => {
          console.log('Contact added successfully');
        },
        (error) => {
          console.error('Error adding contact:', error);
        }
      );
  }
}
