import { Injectable } from '@angular/core';
import countyData from '../assets/data.json';
@Injectable({
  providedIn: 'root'
})
export class StatesAndMusicService {
  state: string;

  statesHash = {
    Alabama: 'AL',
    Alaska: 'AK',
    Arizona: 'AZ',
    Arkansas: 'AR',
    California: 'CA',
    Colorado: 'CO',
    Connecticut: 'CT',
    Delaware: 'DE',
    Florida: 'FL',
    Georgia: 'GA',
    Hawaii: 'HI',
    Idaho: 'ID',
    Illinois: 'IL',
    Indiana: 'IN',
    Iowa: 'IA',
    Kansas: 'KS',
    Kentucky: 'KY',
    Louisiana: 'LA',
    Maine: 'ME',
    Maryland: 'MD',
    Massachusetts: 'MA',
    Michigan: 'MI',
    Minnesota: 'MN',
    Mississippi: 'MS',
    Missouri: 'MO',
    Montana: 'MT',
    Nebraska: 'NE',
    Nevada: 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    Ohio: 'OH',
    Oklahoma: 'OK',
    Oregon: 'OR',
    Pennsylvania: 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    Tennessee: 'TN',
    Texas: 'TX',
    Utah: 'UT',
    Vermont: 'VT',
    Virginia: 'VA',
    Washington: 'WA',
    'West Virginia': 'WV',
    Wisconsin: 'WI',
    Wyoming: 'WY'
  };

  counties = countyData;
  constructor() {}

  setState(stateValue: string) {
    this.state = stateValue;
  }

  getState(): string {
    return this.state;
  }

  isValidState(): boolean {
    // return this.states.includes(this.getState());
    return Object.keys(this.statesHash).includes(this.getState());
  }

  getStateCounties(state: string): string[] {
    const countiesArr = Object.keys(this.counties);
    return countiesArr.filter(item => item.substring(0, 2) === this.statesHash[state]);
  }

  getTooltipInfo(county: string): string {
    return `${this.getFullName(county)}, ${this.counties[county].raceRatingSegment}`;
  }

  getFullName(county: string): string {
    return this.counties[county].fullName;
  }

  getParty(county: string): string {
    return this.counties[county].party;
  }

  getRaceRatingID(county: string): string {
    return this.counties[county].raceRatingID;
  }

  getRatingPhrase(county: string): string {
    return this.counties[county].ratingPhrase;
  }

  getOpenSeat(county: string): string {
    return this.counties[county].open_seat;
  }

  getTurnover(county: string): string {
    return this.counties[county].turnover;
  }

  getTrumpMargin(county: string): string {
    return this.counties[county].trump_margin;
  }
}
