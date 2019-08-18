import { Component, OnInit } from '@angular/core';

import { StatesAndMusicService } from '../states-and-music.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-county-select',
  templateUrl: './county-select.component.html',
  styleUrls: ['./county-select.component.css']
})
export class CountySelectComponent implements OnInit {
  private countyControl = new FormControl();

  private countyOptions: string[] = this.getStateCounties(this.getState());

  private filteredCountyOptions: Observable<string[]>;

  constructor(private statesAndMusicService: StatesAndMusicService) {}

  ngOnInit() {
    this.filteredCountyOptions = this.countyControl.valueChanges.pipe(
      startWith(''),
      map(county => this.filterCounties(county))
    );
  }

  private filterCounties(county: string): string[] {
    const filterValue = county.toLowerCase();

    return this.countyOptions.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  getState(): string {
    return this.statesAndMusicService.getState();
  }

  getStateCounties(state: string): string[] {
    return this.statesAndMusicService.getStateCounties(state);
  }

  getTooltipInfo(county: string): string {
    return this.statesAndMusicService.getTooltipInfo(county);
  }

  getFilteredCountyOptions(): Observable<string[]> {
    return this.filteredCountyOptions;
  }

  getCountyControl(): FormControl {
    return this.countyControl;
  }
}
