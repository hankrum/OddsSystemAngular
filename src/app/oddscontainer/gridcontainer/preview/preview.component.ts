import { Component, OnInit, Input } from '@angular/core';
import { SportsEvent } from 'src/app/models/SportsEvent.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() sportEvents: SportsEvent[];

  constructor() { }

  ngOnInit() {
  }

}
