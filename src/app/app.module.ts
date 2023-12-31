import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantsListComponent } from './components/participants-list/participants-list.component';
import { ParticipantEditComponent } from './components/participant-edit/participant-edit.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { CompetitionListComponent } from './components/competition-list/competition-list.component';
import { AddMultipleParticipantsComponent } from './components/add-multiple-participants/add-multiple-participants.component';
import { DivisionListComponent } from './components/division-list/division-list.component';
import { VenuesListComponent } from './components/venues-list/venues-list.component';
import { FieldsListComponent } from './components/fields-list/fields-list.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { GroupPlayTemplateComponent } from './components/group-play-template/group-play-template.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { MatchGeneratorComponent } from './components/match-generator/match-generator.component';
import { PlayOffsComponent } from './components/play-offs/play-offs.component';
import { FormsModule } from '@angular/forms';
import { PlayOffTiersComponent } from './components/play-off-tiers/play-off-tiers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileIdComponent } from './components/profile-id/profile-id.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsListComponent,
    ParticipantEditComponent,
    EventListComponent,
    CompetitionListComponent,
    AddMultipleParticipantsComponent,
    DivisionListComponent,
    VenuesListComponent,
    FieldsListComponent,
    RegistrationListComponent,
    GroupPlayTemplateComponent,
    TournamentComponent,
    MatchGeneratorComponent,
    PlayOffsComponent,
    PlayOffTiersComponent,
    ProfileComponent,
    ProfileIdComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
