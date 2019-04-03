import { Injectable } from '@angular/core';
import { SportsEvent } from './models/SportsEvent.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportEventService {

  private index = 4;
  private sportEvents: SportsEvent[] = [
    new SportsEvent(1, "Levski-CSKA", 2, 2, 2, new Date(2019, 4, 4)),
    new SportsEvent(2, "Grigor-Nole", 3, 4, 5, new Date(2019, 4, 4)),
    new SportsEvent(3, "Slavia-Loko", 2, 2, 2, new Date(2019, 1, 4)),
  ];

  sportEventsStream = new Subject<SportsEvent[]>();

  constructor() {
    this.sportEventsStream.next(this.sportEvents);
  }

  getAll() {
    return this.sportEvents.slice();
  }

  edit(sportEvent: SportsEvent): void {
    this.sportEvents[sportEvent.eventId - 1] = new SportsEvent(
        sportEvent.eventId,
        sportEvent.name,
        sportEvent.oddsForFirstTeam,
        sportEvent.oddsForDraw,
        sportEvent.oddsForSecondTeam,
        sportEvent.eventStartDate
      ); // TODO
      this.sportEventsStream.next(this.sportEvents);
    }

  delete(sportEvent:SportsEvent): void {
    let pos: number = this.sportEvents.findIndex( se => se.eventId === sportEvent.eventId);
    this.sportEvents = [...this.sportEvents.slice(0, pos), ...this.sportEvents.slice(pos+1)];
    this.sportEventsStream.next(this.sportEvents);
  }
}
