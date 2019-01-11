import { Injectable } from '@angular/core';
import { IEvent } from './event.model';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {

  EVENTSLocal = EVENTS;
  ColorLL: string;

  event: IEvent;
  getEvents() {

    const subject = new Subject();
    setTimeout(() => { subject.next(this.EVENTSLocal); subject.complete(); }, 100);
    return subject;

  }




  getEvent(id: number): IEvent {
    return this.EVENTSLocal.find(ev => ev.id === id);
  }

  saveEvent(event) {
    const nextId = Math.max.apply(null, EVENTS.map(s => s.id));
    event.id = nextId + 1;
    event.date = new Date();
    console.log( this. ColorLL);
    event.color = this. ColorLL;
    console.log( event.color);

    switch (event.category) {
      case 'Personal':
        event.imageUrl = '/assets/images/work.jpg';
        // code block
        break;
      case 'Work':
        event.imageUrl = '/assets/images/personal.jpg';
        break;
      default:
        event.imageUrl = '/assets/images/other.jpg';
    }

    this.EVENTSLocal.push(event);

  }


}


const EVENTS: IEvent[] = [
  {
    id: 1,
    title: 'Attend Meeting',
    body: 'Meeting to take at 9:00 AM',
    imageUrl: '/assets/images/work.jpg',
    category: 'Personal',
    pinned: false,
    date: new Date('10/10/2017'),
    color: '#C3E5FF'


  },
  {
    id: 2,
    title: 'Book tickets',
    body: 'Book movie tickets for weekend',
    imageUrl: '/assets/images/personal.jpg',
    category: 'Work',
    pinned: false,
    date: new Date('10/10/2017'),
    color: '#FEF3B5'

  },

  {
    id: 3,
    title: 'Send email',
    body: 'Send email to stake holders',
    imageUrl: '/assets/images/other.jpg',
    category: 'Others',
    pinned: false,
    date: new Date('10/10/2017'),
    color: '#FFC4F4'
  }];

