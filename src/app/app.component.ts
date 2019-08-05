import { Component } from '@angular/core';
import { StatesAndMusicService } from './states-and-music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private statesAndMusicService: StatesAndMusicService) { }

  showCountySelect(): boolean {
    return this.statesAndMusicService.isValidState();
  }
}
