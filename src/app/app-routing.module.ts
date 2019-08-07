import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateSelectComponent } from './state-select/state-select.component';
import { CountyDisplayComponent } from './county-display/county-display.component';
import { CountyCompareComponent } from './county-compare/county-compare.component';
import { CountyCompareDisplayComponent } from './county-compare-display/county-compare-display.component';
import { GeneratePlaylistComponent } from './generate-playlist/generate-playlist.component';


const routes: Routes = [
    { path: '', component: StateSelectComponent },
    { path: 'seat-id/:id', component: CountyDisplayComponent },
    { path: 'compare/:id', component: CountyCompareComponent },
    { path: 'compare/:firstCounty/:secondCounty', component: CountyCompareDisplayComponent },
    { path: 'playlist/:state', component: GeneratePlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
