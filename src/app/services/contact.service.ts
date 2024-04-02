import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from '../models/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://qweerty.somee.com';

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(`${this.apiUrl}/api/ContactApi/GetAll`);
  }

  getContact(id: number): Observable<Contacts> {
    return this.http.get<Contacts>(`${this.apiUrl}/api/ContactApi/Get?id=${id}`);
  }

  addContact(contact: Contacts): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/api/ContactApi/Add`, contact);
  }

  updateContact(contact: Contacts): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/ContactApi/Update`, contact);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/ContactApi/Delete?id=${id}`);
  }

  deleteAllContacts(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/ContactApi/DeleteAll`);
  }
}
