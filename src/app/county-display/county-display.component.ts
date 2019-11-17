import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { StatesAndMusicService } from '../states-and-music.service';
import { PlaylistService } from '../playlist.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-county-display',
  templateUrl: './county-display.component.html',
  styleUrls: ['./county-display.component.css']
})
export class CountyDisplayComponent implements OnInit, OnDestroy {

  private countyName: string;
  private sub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private statesAndMusicService: StatesAndMusicService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.sub.add(
      this.route.params.subscribe(params => {
        this.countyName = params.id;
      })
    );
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

  getState(): string {
    const stateCode = this.countyName.substring(0, 2);
    return this.statesAndMusicService.reverseStatesHash()[stateCode];
  }

  onClickMusic(): void {
    this.playlistService.authSpotifyUser(this.getState());
  }

  getCountyName(): string {
    return this.countyName;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
