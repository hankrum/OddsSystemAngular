import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SportsEvent } from '../models/SportsEvent.model';
import { EditMode } from '../models/enums/EditMode';

@Component({
  selector: 'app-oddscontainer',
  templateUrl: './oddscontainer.component.html',
  styleUrls: ['./oddscontainer.component.css']
})
export class OddscontainerComponent implements OnInit {

  @Input() editMode: EditMode;
  @Output() editModeChange = new EventEmitter();

  @Input() sportEvents: SportsEvent[];
  @Output() sportEventsChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
