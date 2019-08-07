import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generate-playlist',
  templateUrl: './generate-playlist.component.html',
  styleUrls: ['./generate-playlist.component.css']
})
export class GeneratePlaylistComponent implements OnInit, OnDestroy {

  stateName: string;
  private sub: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.stateName = params.state;
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
