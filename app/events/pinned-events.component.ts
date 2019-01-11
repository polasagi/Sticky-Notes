import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';


@Component({
  selector: 'app-pinned-events',
  templateUrl: './pinned-events.component.html',
  styles: [`
  app-eventthumbnail {background:#ffc;}
  `]
})
export class PinnedEventsComponent implements OnInit {

  events: any = [];
  filteredEvents: any = [];

  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => { this.events = events;
      this.filteredEvents = this.events.filter((note) =>
      note.pinned === true);
      });



  }

}
