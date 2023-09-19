import { Component } from '@angular/core';
interface competition{
  name:string,
  sport:string,
  type:string,
  events:number
}
@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent {
  competitionList :competition[] = []
  constructor(){
    this.competitionList = [
      {
        name: "Competition 1",
        sport: "Football",
        type: "Premier League",
        events: 38,
      },
      {
        name: "Competition 2",
        sport: "Basketball",
        type: "NBA",
        events: 82,
      },
      {
        name: "Competition 3",
        sport: "Tennis",
        type: "Wimbledon",
        events: 13,
      },
    ];
  }
}
