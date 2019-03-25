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

  edit (sportEvent: SportsEvent): void {
    this.sportEvents[sportEvent.eventId] = sportEvent; // TODO
  }
}
