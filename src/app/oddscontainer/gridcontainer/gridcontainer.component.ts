import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditMode } from '../../models/enums/EditMode';
import { SportsEvent } from '../../models/SportsEvent.model';

@Component({
  selector: 'app-gridcontainer',
  templateUrl: './gridcontainer.component.html',
  styleUrls: ['./gridcontainer.component.css']
})
export class GridcontainerComponent implements OnInit {

  @Input() editMode: EditMode;
  @Output() editModeChange = new EventEmitter();

  @Input() sportEvents: SportsEvent[];
  @Output() sportEventsChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
