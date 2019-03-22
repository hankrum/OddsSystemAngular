import { Injectable } from '@angular/core';
import { EditMode } from './models/enums/EditMode';

@Injectable({
  providedIn: 'root'
})
export class EditModeService {
  
  editMode: EditMode = EditMode.Preview;

  constructor() { }

  getMode() {
    return this.editMode;
  }

  getButtonText() {
    return this.editMode===EditMode.Preview ? EditMode.Edit : EditMode.Preview;
  }

  toggleMode(): void {
    this.editMode = this.editMode === EditMode.Preview ? EditMode.Edit : EditMode.Preview;
  }
}
