import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import { ReversePipe } from './pipes/reverse.pipe';
import {MatInputModule} from '@angular/material/input';
import { AclDirective } from './directives/acl.directive';
import { HighlightDirective } from './directives/highlight.directive'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [ReversePipe, AclDirective, HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    ReversePipe,
    MatInputModule,
    AclDirective,
    HighlightDirective,
    MatSnackBarModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
