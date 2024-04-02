import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsDeleteComponent } from './credentials-delete.component';

describe('CredentialsDeleteComponent', () => {
  let component: CredentialsDeleteComponent;
  let fixture: ComponentFixture<CredentialsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CredentialsDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CredentialsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
