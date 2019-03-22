import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EditMode } from '../../models/enums/EditMode';
import { GridcontainerComponent } from '../gridcontainer/gridcontainer.component';
import { EditModeService } from '../../edit-mode.service';

@Component({
  selector: 'app-editmode',
  templateUrl: './editmode.component.html',
  styleUrls: ['./editmode.component.css']
})
export class EditmodeComponent implements OnInit {

  editMode: EditMode;
  editModeButtonText: string;

  constructor(public editModeService: EditModeService) {
    this.setEditMode();
  }

  setEditMode() {
    this.editMode = this.editModeService.getMode();
    this.editModeButtonText = this.editModeService.getButtonText();
  }

  ngOnInit() {
  }

  onEditModeButton() {
    this.editModeService.toggleMode();
    this.setEditMode();
  }
}
