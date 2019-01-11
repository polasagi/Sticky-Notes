import { Component } from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';


@Component({
  templateUrl: './create-event.component.html'
})


export class CreateEventComponent {
  constructor(private eventService: EventService) {

  }

  event: IEvent;
  colorL: string;
  setColor(color: string) {
    this.eventService.ColorLL = color;
  }

  saveEvent(formValues) {
    console.log(formValues);
    console.log(formValues.title);

    // this.event.title = formValues.title;
    // this.event.body = formValues.body;
    // this.event.category = formValues.category;
    // this.event.color = this.colorL;

    console.log(event);
    this.eventService.saveEvent(formValues);


  }
}
