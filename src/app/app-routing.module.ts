import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './oddscontainer/gridcontainer/preview/preview.component';
import { EditComponent } from './oddscontainer/gridcontainer/edit/edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/Preview", pathMatch: 'full' }, 
  { path: "Preview", component: PreviewComponent },
  { path: "Edit", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
