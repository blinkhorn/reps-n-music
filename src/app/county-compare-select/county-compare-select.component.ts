import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatesAndMusicService } from '../states-and-music.service';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-county-compare-select',
  templateUrl: './county-compare-select.component.html',
  styleUrls: ['./county-compare-select.component.css']
})
export class CountyCompareSelectComponent implements OnInit, OnDestroy {
  private previousCountyName: string;
  private sub = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private statesAndMusicService: StatesAndMusicService
  ) {}

  ngOnInit() {
    this.sub.add(
      this.route.params.subscribe(params => {
        this.previousCountyName = params.id;
      })
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

  getPreviousCountyName(): string {
    return this.previousCountyName;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
