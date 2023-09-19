import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent {
  checkboxArray: string[] = [
    'Required',
    'Editable',
    'Office use only',
    'Show on Scheduling Request View',
    'View in List',
    'Make Global'
  ]
}
