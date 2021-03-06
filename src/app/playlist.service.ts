import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlistID: string;
  authURL = 'https://accounts.spotify.com/authorize';
  searchUrl = 'https://api.spotify.com/v1/search';
  myKey = 'cd1e9a4fbc0047d49b737d62370e3c5e';
  scope = 'playlist-modify-public playlist-modify-private user-read-private';
  redirectURI = 'https://bloncsq9w1.execute-api.eu-central-1.amazonaws.com/production/playlist/';

  constructor(private http: HttpClient) {}

  authSpotifyUser(state: string): void {
    this.redirectURI += encodeURIComponent(state); // redirect back to specific state
    this.authURL += '?response_type=token';
    this.authURL += `&client_id=${encodeURIComponent(this.myKey)}`;
    this.authURL += `&scope=${encodeURIComponent(this.scope)}`;
    this.authURL += `&redirect_uri=${encodeURIComponent(this.redirectURI)}`;
    window.location.href = this.authURL;
  }

  getPlaylist(state: string, token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    const playlistName = `Get vocal, ${state}!`;
    this.searchUrl += `?q=${encodeURIComponent(playlistName)}&type=playlist`;
    return this.http.get(this.searchUrl, httpOptions);
  }
}
