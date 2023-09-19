import { Component } from '@angular/core';
interface event{
  eventName: string | undefined
  type: string | undefined
  sport: string | undefined  
  startDate: string | undefined  
  endDate: string | undefined  
  divisions: string | undefined 
  schedule: string | undefined  
  form: string | undefined
  teams: string | undefined
  clubs: number | undefined
}
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events :event[] = []
  constructor(){
    this.events =  [
      {
        eventName: "Event 1",
        type: "Type 1",
        sport: "Sport 1",
        startDate: "2021-01-01",
        endDate: "2021-01-05",
        divisions: "Division 1",
        schedule: "Schedule 1",
        form: "Form 1",
        teams: "Teams 1",
        clubs: 10,
      },
      {
        eventName: "Event 2",
        type: "Type 2",
        sport: "Sport 2",
        startDate: "2021-02-01",
        endDate: "2021-02-05",
        divisions: "Division 2",
        schedule: "Schedule 2",
        form: "Form 2",
        teams: "Teams 2",
        clubs: 5,
      }
    ];
  }
}

