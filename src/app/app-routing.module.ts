import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateSelectComponent } from './state-select/state-select.component';


const routes: Routes = [
    { path: '', component: StateSelectComponent }
    // { }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
