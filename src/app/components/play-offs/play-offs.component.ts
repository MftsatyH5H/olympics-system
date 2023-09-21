import { Component } from '@angular/core';

@Component({
  selector: 'app-play-offs',
  templateUrl: './play-offs.component.html',
  styleUrls: ['./play-offs.component.css']
})
export class PlayOffsComponent {
  public name :string = ""
  public description:string =""
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
    },
    {
      name: '12 team 4 Bracket',
      description: 'Winner of each play in semis, the rest play consolation'
    },
    {
      name: '2 Bracket- Final/ 3rd place /5th place games',
      description: 'Teams are in 2 Brackets of 3 based on Day 1 results their 3rd games are as scheduled'
    }
  ]
  customPlayOffs: {name:string; description:string}[] = [
    
  ]
  addCustomPlayOff(){
    this.customPlayOffs.push({
      name: this.name,
      description: this.description
    })
  }
}
