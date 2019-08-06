import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateSelectComponent } from './state-select/state-select.component';
import { CountyDisplayComponent } from './county-display/county-display.component';


const routes: Routes = [
    { path: '', component: StateSelectComponent },
    { path: 'seat-id/:id', component: CountyDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
