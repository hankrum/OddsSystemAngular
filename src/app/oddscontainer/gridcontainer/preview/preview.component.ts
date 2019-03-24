import { Component, OnInit } from '@angular/core';
import { SportsEvent } from '../../../models/SportsEvent.model';
import { SportEventService } from '../../../sport-event.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  sportEvents: SportsEvent[];

  constructor(public sportEventService: SportEventService) {
    this.sportEvents = this.sportEventService.getAll();
  }

  ngOnInit() {
  }

}
