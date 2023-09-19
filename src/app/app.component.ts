import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ParticipantEditComponent } from './components/participant-edit/participant-edit.component';
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
const routes: Routes = [
  { path: 'edit', component: ParticipantEditComponent }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'olympics-system';
}
