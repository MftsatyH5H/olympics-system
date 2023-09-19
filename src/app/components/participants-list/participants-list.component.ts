import { Component } from '@angular/core';
interface participant{
  Acr:number
  familyName:string
  givenName:string
  nameOnPass:string
  organization:string
  category:string
  function:string
  documentation:string
  participantStatus:string
  game:string
}
@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
  
})
export class ParticipantsListComponent {
  participants: participant[] = [];
  constructor(){
    this.participants = [
      {
        Acr: 1,
        familyName: 'Smith',
        givenName: 'John',
        nameOnPass: 'John Smith',
        organization: 'ABC Company',
        category: 'Category 1',
        function: 'Function 1',
        documentation: 'ABC 123',
        participantStatus: 'Active',
        game: 'Game 1'
      },
      {
        Acr: 2,
        familyName: 'Doe',
        givenName: 'Jane',
        nameOnPass: 'Jane Doe',
        organization: 'XYZ Company',
        category: 'Category 2',
        function: 'Function 2',
        documentation: 'ABC 123',
        participantStatus: 'Inactive',
        game: 'Game 2'
      }
    ];
  }
}
