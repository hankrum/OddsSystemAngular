import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportsEvent } from 'src/app/models/SportsEvent.model';
import { SportEventService } from 'src/app/sport-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  sportEvents: SportsEvent[];
  private sportEventsSubscription: Subscription;

  constructor(private sportEventService: SportEventService) {
  }

  ngOnInit() {
    this.sportEvents = this.sportEventService.getAll();
    this.sportEventsSubscription = this.sportEventService.sportEventsStream
    .subscribe(
      (sportEvents: SportsEvent[]) => {
        this.sportEvents = sportEvents;
      }
    )
  }

  ngOnDestroy() {
    this.sportEventsSubscription.unsubscribe();
  }
}
