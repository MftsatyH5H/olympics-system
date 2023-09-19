import { Component } from '@angular/core';
interface groupPlay{
  name:string,
  rounds:number,
  brackets:number,
  seeds:number,
  createdAt:string,
  updatedAt:string
}
@Component({
  selector: 'app-group-play-template',
  templateUrl: './group-play-template.component.html',
  styleUrls: ['./group-play-template.component.css']
})
export class GroupPlayTemplateComponent {
  groupPlayList: groupPlay[] = []
  constructor () {
    this.groupPlayList =[
      {
        name: "Group A",
        rounds: 3,
        brackets: 4,
        seeds: 8,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-02",
      },
      {
        name: "Group B",
        rounds: 2,
        brackets: 2,
        seeds: 4,
        createdAt: "2021-01-03",
        updatedAt: "2021-01-04",
      },
      {
        name: "Group C",
        rounds: 4,
        brackets: 8,
        seeds: 16,
        createdAt: "2021-01-05",
        updatedAt: "2021-01-06",
      },
    ];
  }
}
