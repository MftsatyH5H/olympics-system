import { Component } from '@angular/core';

@Component({
  selector: 'app-match-generator',
  templateUrl: './match-generator.component.html',
  styleUrls: ['./match-generator.component.css']
})
export class MatchGeneratorComponent {
  templateArray: string[] =[
    '4 teams 6 game league schedule',
    '4 teams 8 game league schedule',
    '4 teams 12 game league schedule',
    '4 teams 3 Game Round Robin, Over 3 days',
    '4 teams 10 game league schedule',
    '4 Teams, 3 Game Round Robin, Over 2 days',
    '1 Bracket 4 Team Showcase (3 days)',
    'New Group Play Template',
  ]
  matchTemplateArray: {name:string; description:string}[] =[
    {
      name: '1 Bracket - Final Only',
      description: 'One bracket where the top two tears play a final'
    },
    {
      name: '1 Bracket - Final & Consolation',
      description: '1 Bracket • The top 2 teams play a final. & 3rd vs 4th place in a consolation'
    },
    {
      name: '2 Brackets - Final only',
      description: 'Two brackets, winner of each meet in a final'
    },
    {
      name: '2 Brackets - Final & 3rd Place Match',
      description: '2 Brackets. Winner of bracket A and bracket B meet in final, 2nd in bracket A and 2nd in bracket b play 3rd place match.'
    },
    {
      name: '6 Team',
      description: '2 brackets of 3. After 2 game round robin, semi-Finals, and consolation, followed by final. (A1 vB2, BIVA2, A3vB3)'
    },
    {
      name: '1 Bracket - Final Only',
      description: 'One bracket, where the top two tears play a final'
    }
  ]
  teams :{name:string; count:number; fDate:string; lDate:string}[]= [{
    name:"None",
    count:0,
    fDate:"None",
    lDate:"None"
  }]
  playoffs: {name:string, description:string}[] =[
    {
      name: '1 Bracket - Final Only',
      description: 'One bracket where the top two tears play a final'
    }
  ]
  addTeam(){
    this.teams.push({
      name:"None",
    count:0,
    fDate:"None",
    lDate:"None"
    })
  }
  addPlayOff(name:string, desc:string){
    this.playoffs.push(
      {
        name:name,
        description:desc
      }
    )
  }
}
