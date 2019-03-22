import { Component, OnInit, Input } from '@angular/core';
import { SportsEvent } from '../../../../models/SportsEvent.model';

@Component({
  selector: '[app-sport-event-item]',
  templateUrl: './sport-event-item.component.html',
  styleUrls: ['./sport-event-item.component.css']
})
export class SportEventItemComponent implements OnInit {
  @Input() sportEventItem: SportsEvent;

  constructor() {  }

  ngOnInit() { 
  }

}
