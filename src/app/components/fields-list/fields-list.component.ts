import { Component } from '@angular/core';

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.css']
})
export class FieldsListComponent {
  fieldsArray: string[] =[
    'Allow Credit Card Payment',
    'Accept Check Money',
    'Active',
    'Allow Credit Card Payments',
    'Accept Check Money',
  ]
}
