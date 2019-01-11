import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { LoginComponent } from './users/login.component';
import { ProfileComponent } from './users/profile.component';
import { PinnedEventsComponent } from './events/pinned-events.component';

export const appRoutes: Routes = [
  { path: 'notes/new', component: CreateEventComponent },
  { path: 'notes/pinned', component: PinnedEventsComponent },
  { path: 'notes', component: EventsListComponent },
  { path: 'notes/:id', component: EventDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' }

];



