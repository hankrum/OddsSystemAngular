import { Component } from '@angular/core';
import { SportsEvent } from './models/SportsEvent.model';
import { FormsModule } from '@angular/forms';
import { EditMode } from './models/enums/EditMode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'odds-system-ui';

  sportEvents: SportsEvent[] = [
    new SportsEvent("Levski-CSKA", 2, 2, 2, new Date(2019, 1, 2)),
    new SportsEvent("Grigor-Nole", 3, 4, 5, new Date(2019, 1, 2)),
    new SportsEvent("Slavia-Loko", 2, 2, 2, new Date(2019, 1, 2)),
  ];

  editMode: EditMode = EditMode.Preview;

}
