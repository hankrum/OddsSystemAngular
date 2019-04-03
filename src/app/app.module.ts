import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './oddscontainer/gridcontainer/preview/preview.component';
import { EditmodeComponent } from './oddscontainer/editmode/editmode.component';
import { OddscontainerComponent } from './oddscontainer/oddscontainer.component';
import { GridcontainerComponent } from './oddscontainer/gridcontainer/gridcontainer.component';
import { SportEventItemComponent } from './oddscontainer/gridcontainer/preview/sport-event-item/sport-event-item.component';
import { EditModule } from './oddscontainer/gridcontainer/edit/edit/edit.module';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EditmodeComponent,
    OddscontainerComponent,
    GridcontainerComponent,
    
    SportEventItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditModule
  ],
  //exports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
