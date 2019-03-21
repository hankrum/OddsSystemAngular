import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './oddscontainer/gridcontainer/preview/preview.component';
import { EditmodeComponent } from './oddscontainer/editmode/editmode.component';
import { OddscontainerComponent } from './oddscontainer/oddscontainer.component';
import { GridcontainerComponent } from './oddscontainer/gridcontainer/gridcontainer.component';
import { EditGridComponent } from './oddscontainer/gridcontainer/edit-grid/edit-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EditmodeComponent,
    OddscontainerComponent,
    GridcontainerComponent,
    EditGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
