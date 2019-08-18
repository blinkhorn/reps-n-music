import { Injectable } from '@angular/core';
import countyData from '../assets/data.json';

export interface StateGroup {
  letter: string;
  names: string[];
}
@Injectable({
  providedIn: 'root'
})
export class StatesAndMusicService {
  private state: string;

  private statesHash = {
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

  private counties = countyData;

  constructor() {}

  setState(stateValue: string) {
    this.state = stateValue;
  }

  getState(): string {
    return this.state;
  }

  isValidState(): boolean {
    return Object.keys(this.statesHash).includes(this.getState());
  }

  getStateCounties(state: string): string[] {
    const countiesArr = Object.keys(this.counties);
    return countiesArr.filter(
      item => item.substring(0, 2) === this.statesHash[state]
    );
  }

  getTooltipInfo(county: string): string {
    return `${this.getFullName(county)}, ${this.getRaceRatingSegment(county)}`;
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

  getRaceRatingSegment(county: string): string {
    return this.counties[county].raceRatingSegment.replace(/-/g, ' ');
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

  getCountyState(county: string): string {
    return this.counties[county].state;
  }

  groupByFirstLetter(): StateGroup[] {
    const stateGroup: StateGroup[] = [{letter: '', names: [] }];
    Object.keys(this.statesHash).forEach(k => {
      const i = k.toString().substring(0, 1);
      if (stateGroup[i]) {
        stateGroup[i].push(k);
      } else {
        stateGroup[i] = [k];
      }
    });
    stateGroup.shift(); // remove dummy item I initialized on first line of groupByFirstLetter()
    return Object.keys(stateGroup).map(k => ({
      letter: k,
      names: stateGroup[k]
    }));
  }
}
