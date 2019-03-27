import { Injectable } from '@angular/core';
import { SportsEvent } from './models/SportsEvent.model';

@Injectable({
  providedIn: 'root'
})
export class SportEventService {

  index = 4;
  sportEvents: SportsEvent[] = [
    new SportsEvent(1, "Levski-CSKA", 2, 2, 2, new Date(2019, 1, 2)),
    new SportsEvent(2, "Grigor-Nole", 3, 4, 5, new Date(2019, 1, 2)),
    new SportsEvent(3, "Slavia-Loko", 2, 2, 2, new Date(2019, 1, 2)),
  ];

  constructor() { }

  getAll() {
    return this.sportEvents;
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
  }

  delete(sportEvent:SportsEvent): void {
    let pos: number = sportEvent.eventId - 1;
    this.sportEvents = [...this.sportEvents.slice(0, pos), ...this.sportEvents.slice(pos+1)];
  }
}
