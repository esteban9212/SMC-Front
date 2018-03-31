import { TestBed, inject } from '@angular/core/testing';

import { PlanAssessmentService } from './plan-assessment.service';

describe('PlanAssessmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanAssessmentService]
    });
  });

  it('should be created', inject([PlanAssessmentService], (service: PlanAssessmentService) => {
    expect(service).toBeTruthy();
  }));
});
