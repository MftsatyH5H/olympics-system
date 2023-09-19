import { Component } from '@angular/core';
interface Venue{
  name:string,
  city:string,
  state:string,
  zip:number,
  country:string,
  fields:number,
  organization:number
}
@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})
export class VenuesListComponent {
  venuesList: Venue[] = []
  constructor(){
    this.venuesList = [
      {
        name: "Madison Square Garden",
        city: "New York",
        state: "NY",
        zip: 10001,
        country: "USA",
        fields: 20000,
        organization: 1
      },
      {
        name: "Wembley Stadium",
        city: "London",
        state: "",
        zip: 31511,
        country: "UK",
        fields: 90000,
        organization: 2
      },
      {
        name: "Estadio Azteca",
        city: "Mexico City",
        state: "",
        zip: 51513,
        country: "Mexico",
        fields: 105000,
        organization: 3
      }
    ];
  }
}
