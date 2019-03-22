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
}
