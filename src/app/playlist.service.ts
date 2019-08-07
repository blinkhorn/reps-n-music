import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  authURL = 'https://accounts.spotify.com/authorize';
  myKey = 'cd1e9a4fbc0047d49b737d62370e3c5e';
  scope = 'playlist-modify-public playlist-modify-private user-read-private';
  redirectURI = 'http://localhost:4200/playlist/';


  constructor(private http: HttpClient) {}


  authSpotifyUser(state: string): void {
    this.redirectURI += state; // redirect back to specific state
    this.authURL += '?response_type=token';
    this.authURL += '&client_id=' + encodeURIComponent(this.myKey);
    this.authURL += '&scope=' + encodeURIComponent(this.scope);
    this.authURL += '&redirect_uri=' + encodeURIComponent(this.redirectURI);
    window.location.href = this.authURL;
  }

}
