import { Component } from '@angular/core';
interface division{
  name:string,
  gender:string,
  age:number,
  tire:number,
  totalTeam:number
}
@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.css']
})
export class DivisionListComponent {
  divisionList: division[] = []
  constructor(){
    this.divisionList = [
      {
        name: "Division 1",
        gender: "Male",
        age: 25,
        tire: 1,
        totalTeam: 10,
      },
      {
        name: "Division 2",
        gender: "Female",
        age: 30,
        tire: 2,
        totalTeam: 8,
      },
      {
        name: "Division 3",
        gender: "Male",
        age: 20,
        tire: 1,
        totalTeam: 12,
      },
      {
        name: "Division 4",
        gender: "Male",
        age: 35,
        tire: 3,
        totalTeam: 6,
      },
    ];
  }
}
