import { NgModule } from '@angular/core';
import { NgxReportBuilderComponent } from './ngx-report-builder.component';
import { QuerySwitchGroupDirective } from './query-switch-group.directive';
import { QueryRemoveButtonDirective } from './query-remove-button.directive';
import { QueryOperatorDirective } from './query-operator.directive';
import { QueryInputDirective } from './query-input.directive';
import { QueryFieldDirective } from './query-field.directive';
import { QueryEntityDirective } from './query-entity.directive';
import { QueryEmptyWarningDirective } from './query-empty-warning.directive';
import { QueryButtonGroupDirective } from './query-button-group.directive';
import { QueryArrowIconDirective } from './query-arrow-icon.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgxReportBuilderComponent,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryOperatorDirective,
    QueryInputDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryEmptyWarningDirective,
    QueryButtonGroupDirective,
    QueryArrowIconDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxReportBuilderComponent
  ]
})
export class NgxReportBuilderModule { }
