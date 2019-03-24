import { Component, OnInit } from '@angular/core';
import { SportsEvent } from 'src/app/models/SportsEvent.model';
import { SportEventService } from 'src/app/sport-event.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  sportEvents: SportsEvent[];

  constructor(public sportEventService: SportEventService) {
    this.sportEvents = this.sportEventService.getAll();
  }

  ngOnInit() {
  }

}
