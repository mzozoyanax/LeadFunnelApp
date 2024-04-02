import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workflow } from '../models/workflow';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  private apiUrl = 'https://qweerty.somee.com';

  constructor(private http: HttpClient) { }

  getAllWorkflow(): Observable<Workflow[]> {
    return this.http.get<Workflow[]>(`${this.apiUrl}/api/WorkflowApi/GetAll`);
  }

  getWorkflow(id: number): Observable<Workflow> {
    return this.http.get<Workflow>(`${this.apiUrl}/api/WorkflowApi/Get?id=${id}`);
  }

  addWorkflow(workflow: Workflow): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/api/WorkflowApi/Add`, workflow);
  }

  updateWorkflow(workflow: Workflow): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/WorkflowApi/Update`, workflow);
  }

  deleteWorkflow(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/WorkflowApi/Delete?id=${id}`);
  }

  deleteAllWorkflow(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/WorkflowApi/DeleteAll`);
  }
}
