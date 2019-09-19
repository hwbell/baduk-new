import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  showingDetails = false;
  count = 1;
  clicks = [];

  constructor() {}

  ngOnInit() {}

  toggleDetails() {
    const current = this.showingDetails;
    this.showingDetails = !current;
    this.clicks.push({
      number: this.count,
      style: {
        backgroundColor: this.count > 5 ? 'blue' : 'white',
        color: this.count > 5 ? 'white' : 'black',
      }
    });
    this.count++;
  }
}
