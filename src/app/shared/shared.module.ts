import { RouterModule } from '@angular/router';
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
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [ReversePipe, AclDirective, HighlightDirective, MenuComponent, AboutComponent, ContactsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
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
    MatPaginatorModule,
    MenuComponent,
    AboutComponent,
    ContactsComponent,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class SharedModule { }
