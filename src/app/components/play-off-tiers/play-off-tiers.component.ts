import { Component } from '@angular/core';

@Component({
  selector: 'app-play-off-tiers',
  templateUrl: './play-off-tiers.component.html',
  styleUrls: ['./play-off-tiers.component.css']
})
export class PlayOffTiersComponent {
  tierType:string = ""
  team1:string = ""
  team2:string = ""
  matchesArray:{type:string, team1:string,team2:string}[] = []
}
