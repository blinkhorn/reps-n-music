import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-county-display',
  templateUrl: './county-display.component.html',
  styleUrls: ['./county-display.component.css']
})
export class CountyDisplayComponent implements OnInit {

  countyName: string;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.countyName = params.id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
