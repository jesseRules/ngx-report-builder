import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReportBuilderComponent } from './ngx-report-builder.component';

describe('NgxReportBuilderComponent', () => {
  let component: NgxReportBuilderComponent;
  let fixture: ComponentFixture<NgxReportBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxReportBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxReportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
