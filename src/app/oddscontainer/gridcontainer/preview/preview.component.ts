<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { SportsEvent } from '../../../models/SportsEvent.model';
import { SportEventService } from '../../../sport-event.service';
=======
import { Component, OnInit, Input } from '@angular/core';
import { SportsEvent } from 'src/app/models/SportsEvent.model';
>>>>>>> 2c897cb5369e34515aed2c08e636f31359aff140

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  sportEvents: SportsEvent[];

<<<<<<< HEAD
  constructor(public sportEventService: SportEventService) { 
    this.sportEvents = this.sportEventService.getAll();
  }
=======
  @Input() sportEvents: SportsEvent[];

  constructor() { }
>>>>>>> 2c897cb5369e34515aed2c08e636f31359aff140

  ngOnInit() {
  }

}
