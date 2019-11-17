import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { StatesAndMusicService } from '../states-and-music.service';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const filterArr = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-county-compare',
  templateUrl: './county-compare.component.html',
  styleUrls: ['./county-compare.component.css']
})
export class CountyCompareComponent implements OnInit {

  private stateForm: FormGroup = this.formBuilder.group({
    stateGroup: '',
  });

  private stateGroups: StateGroup[];

  private stateGroupOptions: Observable<StateGroup[]>;

  constructor(private formBuilder: FormBuilder, private statesAndMusicService: StatesAndMusicService) { }

  ngOnInit() {
    this.stateGroups = this.statesAndMusicService.groupByFirstLetter();
    this.statesAndMusicService.setState('');

    this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterGroup(value))
      );
  }

  private filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: filterArr(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  onSetState(stateValue): void {
    this.statesAndMusicService.setState(stateValue);
  }

  showCountySelect(): boolean {
    return this.statesAndMusicService.isValidState();
  }

  getStateGroupOptions(): Observable<StateGroup[]> {
    return this.stateGroupOptions;
  }

  getStateForm(): FormGroup {
    return this.stateForm;
  }

}
