import { Component, OnInit } from '@angular/core';

import countyData from '../../assets/data.json';
import { StatesAndMusicService } from '../states-and-music.service';
@Component({
  selector: 'app-county-select',
  templateUrl: './county-select.component.html',
  styleUrls: ['./county-select.component.css']
})
export class CountySelectComponent implements OnInit {


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
  constructor(private statesAndMusicService: StatesAndMusicService) { }
  stateCounties: string[];

  ngOnInit() {}

  getState(): string {
    return this.statesAndMusicService.getState();
  }

  getStateCounties(state: string) {
    const countiesArr = Object.keys(this.counties);
    return countiesArr.filter(item => item.substring(0, 2) === this.statesHash[state]);
  }


}
