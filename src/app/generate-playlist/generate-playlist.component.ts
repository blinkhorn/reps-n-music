import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generate-playlist',
  templateUrl: './generate-playlist.component.html',
  styleUrls: ['./generate-playlist.component.css']
})
export class GeneratePlaylistComponent implements OnInit {
  url = 'https://accounts.spotify.com/authorize';
  myKey = 'cd1e9a4fbc0047d49b737d62370e3c5e';
  scope = 'playlist-modify-public playlist-modify-private user-read-private';
  redirectURI = 'localhost:4200/playlist/Alaska';

  constructor() { }

  ngOnInit() {
    this.url += '?response_type=token';
    this.url += '&client_id=' + encodeURIComponent(this.myKey);
    this.url += '&scope=' + encodeURIComponent(this.scope);
    this.url += '&redirect_uri=' + encodeURIComponent(this.redirectURI);
    window.location.href = this.url;
  }



}
