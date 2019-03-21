import { Component, OnInit } from '@angular/core';
import { EditMode } from '../../models/enums/EditMode';

@Component({
  selector: 'app-editmode',
  templateUrl: './editmode.component.html',
  styleUrls: ['./editmode.component.css']
})
export class EditmodeComponent implements OnInit {

  editMode: EditMode;
  
  constructor() { }

  ngOnInit() {
  }

  onEditMode() {
    this.editMode = this.editMode === EditMode.Preview ? EditMode.Edit : EditMode.Preview;
  }

}
