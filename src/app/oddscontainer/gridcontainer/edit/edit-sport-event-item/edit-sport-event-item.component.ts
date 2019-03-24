import { Component, OnInit, Input } from '@angular/core';
import { SportsEvent } from 'src/app/models/SportsEvent.model';

@Component({
  selector: '[app-edit-sport-event-item]',
  templateUrl: './edit-sport-event-item.component.html',
  styleUrls: ['./edit-sport-event-item.component.css']
})
export class EditSportEventItemComponent implements OnInit {

  @Input() sportEventItem: SportsEvent;

  constructor() { }

  ngOnInit() {
  }

}
