import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditMode } from '../../models/enums/EditMode';

@Component({
  selector: 'app-editmode',
  templateUrl: './editmode.component.html',
  styleUrls: ['./editmode.component.css']
})
export class EditmodeComponent implements OnInit {

  @Input() editMode: EditMode;
  @Output() editModeChange = new EventEmitter();

  editModeButtonText: string;
  
  constructor() { 
    console.log(this.editMode);
    this.editModeButtonText = this.editMode===EditMode.Preview ? EditMode.Edit : EditMode.Preview;
  }

  ngOnInit() {
  }

  onEditMode() {
    this.editMode = this.editMode === EditMode.Preview ? EditMode.Edit : EditMode.Preview;
    this.editModeButtonText = this.editMode===EditMode.Preview ? EditMode.Edit : EditMode.Preview;
  }

}
