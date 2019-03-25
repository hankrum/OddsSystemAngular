import { Component, OnInit, Input, Output } from '@angular/core';
import { SportsEvent } from 'src/app/models/SportsEvent.model';
import { FormsModule } from '@angular/forms';
import { SportEventService } from 'src/app/sport-event.service';
import { EventEmitter } from 'events';

@Component({
  selector: '[app-edit-sport-event-item]',
  templateUrl: './edit-sport-event-item.component.html',
  styleUrls: ['./edit-sport-event-item.component.css']
})
export class EditSportEventItemComponent implements OnInit {

  @Input() editSportEventItem: SportsEvent;
  // @Output() editSportEventItemChange = new EventEmitter();

  constructor(public sportEventService: SportEventService) { }

  ngOnInit() {
  }

  save() {
    this.sportEventService.edit(this.editSportEventItem);
  }

}
