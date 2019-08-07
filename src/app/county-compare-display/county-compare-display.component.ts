import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { StatesAndMusicService } from '../states-and-music.service';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-county-compare-display',
  templateUrl: './county-compare-display.component.html',
  styleUrls: ['./county-compare-display.component.css']
})
export class CountyCompareDisplayComponent implements OnInit, OnDestroy {
  firstCountyName: string;
  secondCountyName: string;
  private sub: any;

  revStatesHash = {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming'
  };

  constructor(
    private route: ActivatedRoute,
    private statesAndMusicService: StatesAndMusicService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
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

  getState(county: string): string {
    return this.statesAndMusicService.getCountyState(county);
  }

  onClickMusic(state: string): void {
    this.playlistService.authSpotifyUser(state);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
