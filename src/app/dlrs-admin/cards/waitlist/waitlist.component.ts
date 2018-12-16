import { Component, OnInit } from '@angular/core';
import { Waitlist, Offer } from '../../models';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
  styleUrls: ['./waitlist.component.css']
})
export class WaitlistComponent implements OnInit {
  waitlists: Waitlist[];
  offers: Offer[];
  constructor() {}

  ngOnInit() {
    this.waitlists = [
      {
        id: 1,
        lot: 'Lot 23',
        place: 20,
        total: 290
      },
      {
        id: 13,
        lot: 'Lot 46',
        place: 568,
        total: 2590
      },
      {
        id: 18,
        lot: 'CJYR',
        place: 58,
        total: 357
      }
    ].sort((a, b) => {
      return a.place - b.place;
    });

    this.offers = [
      {
        id: 345,
        lot: 'Lot 56',
        expirationDate: '12/28/2018 18:30'
      }
    ];
  }
}
