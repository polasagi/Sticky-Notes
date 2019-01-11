import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'app-eventslist',
  templateUrl: './events-list.component.html',
  styles: [`
  app-eventthumbnail {background:#ffc;}
  `]
}
 )


export class EventsListComponent implements OnInit {
  events: any = [];
  filteredEvents: any = [];
  constructor(private eventService: EventService) {

  }

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {

    this._listFilter = value;
    console.log(this.listFilter);
    this.filteredEvents = this.listFilter ? this.performFilter(this.listFilter) : this.events;
  }

  performFilter(filterby: string) {
    console.log('perform');
    filterby = filterby.toLocaleLowerCase();
    return this.events.filter((note) =>
      note.title.toLocaleLowerCase().indexOf(filterby) !== -1
    );
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => { this.events = events;
      this.filteredEvents = this.events; });
    this.filteredEvents = this.events;

  }

   // deleting specific note from 'notes' array
   onNoteChecked(i: number) {
    this.eventService.EVENTSLocal.splice(i, 1);
}


}
