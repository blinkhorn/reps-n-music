import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateSelectComponent } from './state-select/state-select.component';
import { CountySelectComponent } from './county-select/county-select.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CountyDisplayComponent } from './county-display/county-display.component';
import { CountyCompareComponent } from './county-compare/county-compare.component';
import { CountyCompareSelectComponent } from './county-compare-select/county-compare-select.component';
import { CountyCompareDisplayComponent } from './county-compare-display/county-compare-display.component';
import { GeneratePlaylistComponent } from './generate-playlist/generate-playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    StateSelectComponent,
    CountySelectComponent,
    CountyDisplayComponent,
    CountyCompareComponent,
    CountyCompareSelectComponent,
    CountyCompareDisplayComponent,
    GeneratePlaylistComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
