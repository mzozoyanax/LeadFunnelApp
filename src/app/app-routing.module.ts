import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './components/contacts/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contacts/contact-create/contact-create.component';
import { ContactEditComponent } from './components/contacts/contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './components/contacts/contact-delete/contact-delete.component';

import { CredentialsListComponent } from './components/credentials/credentials-list/credentials-list.component';
import { CredentialsCreateComponent } from './components/credentials/credentials-create/credentials-create.component';
import { CredentialsEditComponent } from './components/credentials/credentials-edit/credentials-edit.component';
import { CredentialsDeleteComponent } from './components/credentials/credentials-delete/credentials-delete.component';
import { WorkflowListComponent } from './components/workflow/workflow-list/workflow-list.component';
import { WorkflowCreateComponent } from './components/workflow/workflow-create/workflow-create.component';
import { WorkflowEditComponent } from './components/workflow/workflow-edit/workflow-edit.component';
import { WorkflowDeleteComponent } from './components/workflow/workflow-delete/workflow-delete.component';
import { WorkflowgroupListComponent } from './components/workflowgroups/workflowgroup-list/workflowgroup-list.component';
import { WorkflowgroupCreateComponent } from './components/workflowgroups/workflowgroup-create/workflowgroup-create.component';
import { WorkflowgroupEditComponent } from './components/workflowgroups/workflowgroup-edit/workflowgroup-edit.component';
import { WorkflowgroupDeleteComponent } from './components/workflowgroups/workflowgroup-delete/workflowgroup-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/add', component: ContactCreateComponent },
  { path: 'contacts/edit/:id', component: ContactEditComponent },
  { path: 'contacts/delete/:id', component: ContactDeleteComponent },
  { path: 'credentials', component: CredentialsListComponent },
  { path: 'credentials/add', component: CredentialsCreateComponent },
  { path: 'credentials/edit/:id', component: CredentialsEditComponent },
  { path: 'credentials/delete/:id', component: CredentialsDeleteComponent },
  { path: 'workflow', component: WorkflowListComponent },
  { path: 'workflow/add', component: WorkflowCreateComponent },
  { path: 'workflow/edit/:id', component: WorkflowEditComponent },
  { path: 'workflow/delete/:id', component: WorkflowDeleteComponent },
  { path: 'workflowgroup', component: WorkflowgroupListComponent },
  { path: 'workflowgroup/add', component: WorkflowgroupCreateComponent },
  { path: 'workflowgroup/edit/:id', component: WorkflowgroupEditComponent },
  { path: 'workflowgroup/delete/:id', component: WorkflowgroupDeleteComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
