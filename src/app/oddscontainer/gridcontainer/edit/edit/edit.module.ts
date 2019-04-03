import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from '../edit.component';
import { EditSportEventItemComponent } from '../edit-sport-event-item/edit-sport-event-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditComponent,
    EditSportEventItemComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class EditModule { }
