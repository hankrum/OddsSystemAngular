import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './oddscontainer/gridcontainer/preview/preview.component';
import { EditmodeComponent } from './oddscontainer/editmode/editmode.component';
import { OddscontainerComponent } from './oddscontainer/oddscontainer.component';
import { GridcontainerComponent } from './oddscontainer/gridcontainer/gridcontainer.component';
import { EditComponent } from './oddscontainer/gridcontainer/edit/edit.component';
import { SportEventItemComponent } from './oddscontainer/gridcontainer/preview/sport-event-item/sport-event-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EditmodeComponent,
    OddscontainerComponent,
    GridcontainerComponent,
    EditComponent,
    SportEventItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
