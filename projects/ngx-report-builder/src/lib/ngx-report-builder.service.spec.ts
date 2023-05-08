import { TestBed } from '@angular/core/testing';

import { NgxReportBuilderService } from './ngx-report-builder.service';

describe('NgxReportBuilderService', () => {
  let service: NgxReportBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxReportBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
