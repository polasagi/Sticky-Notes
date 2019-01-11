import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {appRoutes} from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { LoginComponent } from './users/login.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './users/auth.service';
import { ProfileComponent } from './users/profile.component';
import {ColorPicker} from './events/color-picker.component';
import { PinnedEventsComponent } from './events/pinned-events.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    LoginComponent,
    ProfileComponent,
    ColorPicker,
    PinnedEventsComponent



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [EventService, AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
