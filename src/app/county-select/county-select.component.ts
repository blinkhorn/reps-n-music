import { Component, OnInit } from '@angular/core';


import { StatesAndMusicService } from '../states-and-music.service';
@Component({
  selector: 'app-county-select',
  templateUrl: './county-select.component.html',
  styleUrls: ['./county-select.component.css']
})
export class CountySelectComponent implements OnInit {

  constructor(private statesAndMusicService: StatesAndMusicService) { }
  stateCounties: string[];

  ngOnInit() {}

  getState(): string {
    return this.statesAndMusicService.getState();
  }

  getStateCounties(state: string): string[] {
    return this.statesAndMusicService.getStateCounties(state);
  }

  getTooltipInfo(county: string): string {
    return this.statesAndMusicService.getTooltipInfo(county);
  }

}
