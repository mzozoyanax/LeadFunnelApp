import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credential } from '../models/credential';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private apiUrl = 'https://qweerty.somee.com';

  constructor(private http: HttpClient) { }

  getAllCredentials(): Observable<Credential[]> {
    return this.http.get<Credential[]>(`${this.apiUrl}/api/CredApi/GetAll`);
  }

  getCredentials(id: number): Observable<Credential> {
    return this.http.get<Credential>(`${this.apiUrl}/api/CredApi/Get?id=${id}`);
  }

  addCredentials(credential: Credential): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/api/CredApi/Add`, credential);
  }

  updateCredentials(credential: Credential): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/CredApi/Update`, credential);
  }

  deleteCredentials(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/CredApi/Delete?id=${id}`);
  }

  deleteAllCredentials(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/CredApi/DeleteAll`);
  }
}
