import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CommentsComponent
      }
    ])
  ]
})
export class CommentsModule { }
