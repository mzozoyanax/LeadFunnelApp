import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsCreateComponent } from './credentials-create.component';

describe('CredentialsCreateComponent', () => {
  let component: CredentialsCreateComponent;
  let fixture: ComponentFixture<CredentialsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CredentialsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CredentialsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
