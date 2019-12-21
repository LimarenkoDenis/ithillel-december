import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { UsersComponent } from './users/users.component';
import { UserHeaderComponent } from './user-header/user-header.component';



@NgModule({
  declarations: [ListComponent, CardComponent, UsersComponent, UserHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [UsersComponent, CardComponent]
})
export class UsersModule { }
