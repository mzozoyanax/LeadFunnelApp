import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkflowGroup } from '../models/workflowgroup';

@Injectable({
  providedIn: 'root'
})
export class WorkflowgroupService {

  private apiUrl = 'https://qweerty.somee.com';

  constructor(private http: HttpClient) { }

  getAllWorkflowGroups(): Observable<WorkflowGroup[]> {
    return this.http.get<WorkflowGroup[]>(`${this.apiUrl}/api/ContactApi/GetAll`);
  }

  getWorkflowGroups(id: number): Observable<WorkflowGroup> {
    return this.http.get<WorkflowGroup>(`${this.apiUrl}/api/ContactApi/Get?id=${id}`);
  }

  addWorkflowGroups(workflowGroup: WorkflowGroup): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/api/ContactApi/Add`, workflowGroup);
  }

  updateWorkflowGroups(workflowGroup: WorkflowGroup): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/ContactApi/Update`, workflowGroup);
  }

  deleteWorkflowGroups(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/ContactApi/Delete?id=${id}`);
  }

  deleteAllWorkflowGroups(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/ContactApi/DeleteAll`);
  }
}
