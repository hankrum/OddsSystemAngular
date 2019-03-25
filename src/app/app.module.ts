import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './oddscontainer/gridcontainer/preview/preview.component';
import { EditmodeComponent } from './oddscontainer/editmode/editmode.component';
import { OddscontainerComponent } from './oddscontainer/oddscontainer.component';
import { GridcontainerComponent } from './oddscontainer/gridcontainer/gridcontainer.component';
import { EditComponent } from './oddscontainer/gridcontainer/edit/edit.component';
import { SportEventItemComponent } from './oddscontainer/gridcontainer/preview/sport-event-item/sport-event-item.component';
import { EditSportEventItemComponent } from './oddscontainer/gridcontainer/edit/edit-sport-event-item/edit-sport-event-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EditmodeComponent,
    OddscontainerComponent,
    GridcontainerComponent,
    EditComponent,
    SportEventItemComponent,
    EditSportEventItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
