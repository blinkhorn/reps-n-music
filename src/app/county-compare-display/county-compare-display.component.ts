import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { StatesAndMusicService } from '../states-and-music.service';
import { PlaylistService } from '../playlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-county-compare-display',
  templateUrl: './county-compare-display.component.html',
  styleUrls: ['./county-compare-display.component.css']
})
export class CountyCompareDisplayComponent implements OnInit, OnDestroy {
  private firstCountyName: string;
  private secondCountyName: string;
  private sub = new Subscription();

  private revStatesHash: object;

  constructor(
    private route: ActivatedRoute,
    private statesAndMusicService: StatesAndMusicService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.sub.add(
      this.route.params.subscribe(params => {
        this.firstCountyName = params.firstCounty;
        this.secondCountyName = params.secondCounty;
      })
    );

    this.revStatesHash = this.statesAndMusicService.reverseStatesHash();
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

  getState(county: string): string {
    return this.statesAndMusicService.getCountyState(county);
  }

  onClickMusic(state: string): void {
    this.playlistService.authSpotifyUser(state);
  }

  getRevStatesHash(): object {
    return this.revStatesHash;
  }

  getFirstCountyName(): string {
    return this.firstCountyName;
  }

  getSecondCountyName(): string {
    return this.secondCountyName;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
