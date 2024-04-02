import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsEditComponent } from './credentials-edit.component';

describe('CredentialsEditComponent', () => {
  let component: CredentialsEditComponent;
  let fixture: ComponentFixture<CredentialsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CredentialsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CredentialsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
