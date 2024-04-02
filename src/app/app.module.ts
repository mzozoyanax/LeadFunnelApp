import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './components/contacts/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contacts/contact-create/contact-create.component';
import { ContactEditComponent } from './components/contacts/contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './components/contacts/contact-delete/contact-delete.component';
import { ContactService } from './services/contact.service';

import { CredentialsCreateComponent } from './components/credentials/credentials-create/credentials-create.component';
import { CredentialsDeleteComponent } from './components/credentials/credentials-delete/credentials-delete.component';
import { CredentialsEditComponent } from './components/credentials/credentials-edit/credentials-edit.component';
import { CredentialsListComponent } from './components/credentials/credentials-list/credentials-list.component';
import { CredentialsService } from './services/credentials.service';
import { WorkflowCreateComponent } from './components/workflow/workflow-create/workflow-create.component';
import { WorkflowDeleteComponent } from './components/workflow/workflow-delete/workflow-delete.component';
import { WorkflowEditComponent } from './components/workflow/workflow-edit/workflow-edit.component';
import { WorkflowListComponent } from './components/workflow/workflow-list/workflow-list.component';
import { WorkflowgroupCreateComponent } from './components/workflowgroups/workflowgroup-create/workflowgroup-create.component';
import { WorkflowgroupDeleteComponent } from './components/workflowgroups/workflowgroup-delete/workflowgroup-delete.component';
import { WorkflowgroupEditComponent } from './components/workflowgroups/workflowgroup-edit/workflowgroup-edit.component';
import { WorkflowgroupListComponent } from './components/workflowgroups/workflowgroup-list/workflowgroup-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactCreateComponent,
    ContactEditComponent,
    ContactDeleteComponent,
    CredentialsCreateComponent,
    CredentialsDeleteComponent,
    CredentialsEditComponent,
    CredentialsListComponent,
    WorkflowCreateComponent,
    WorkflowDeleteComponent,
    WorkflowEditComponent,
    WorkflowListComponent,
    WorkflowgroupCreateComponent,
    WorkflowgroupDeleteComponent,
    WorkflowgroupEditComponent,
    WorkflowgroupListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    ContactService,
    CredentialsService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
