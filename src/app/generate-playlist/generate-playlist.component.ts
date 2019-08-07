import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-generate-playlist',
  templateUrl: './generate-playlist.component.html',
  styleUrls: ['./generate-playlist.component.css']
})
export class GeneratePlaylistComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  data: any;
  errorMessage: any;
  stateName: string;
  playlistObj = {};
  private sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.stateName = params.state;
    });

    this.playlistService
      .getPlaylist(this.stateName, this.getToken())
      .subscribe(res => {
        const playlistId = res.playlists.items[0].id;
        window.location.href = `https://open.spotify.com/playlist/${playlistId}`
      });
  }

  getToken() {
    const regex = /([^&;=]+)=?([^&;]*)/g; // isolate sections of params separated by '='
    const totalParams = window.location.hash.substring(1); // get rid of hash from params
    return regex.exec(totalParams)[2];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
