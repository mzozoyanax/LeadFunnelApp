import { TestBed } from '@angular/core/testing';

import { WorkflowgroupService } from './workflowgroup.service';

describe('WorkflowgroupService', () => {
  let service: WorkflowgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
