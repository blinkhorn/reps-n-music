import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { StatesAndMusicService } from '../states-and-music.service';

@Component({
  selector: 'app-county-compare-display',
  templateUrl: './county-compare-display.component.html',
  styleUrls: ['./county-compare-display.component.css']
})
export class CountyCompareDisplayComponent implements OnInit, OnDestroy {

  firstCountyName: string;
  secondCountyName: string;
  private sub: any;
  constructor(private route: ActivatedRoute, private statesAndMusicService: StatesAndMusicService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.firstCountyName = params.firstCounty;
      this.secondCountyName = params.secondCounty;
    });
  }

  getFullName(county: string): string {
    return this.statesAndMusicService.getFullName(county);
  }

  getParty(county: string): string {
    return this.statesAndMusicService.getParty(county);
  }

  getRaceRatingID(county: string): string {
    return this.statesAndMusicService.getRaceRatingID(county);
  }

  getRatingPhrase(county: string): string {
    return this.statesAndMusicService.getRatingPhrase(county);
  }

  getRaceRatingSegment(county: string): string {
    return this.statesAndMusicService.getRaceRatingSegment(county);
  }

  getOpenSeat(county: string): string {
    return this.statesAndMusicService.getOpenSeat(county);
  }

  getTurnover(county: string): string {
    return this.statesAndMusicService.getTurnover(county);
  }

  getTrumpMargin(county: string): string {
    return this.statesAndMusicService.getTrumpMargin(county);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
