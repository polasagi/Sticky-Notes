import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
  <div class="container">
  <nav-bar></nav-bar>
 <router-outlet></router-outlet>
 </div> `,
 styles: [`
 .container {padding-left:20px; padding-right:20px; }
 .event-image {height : 100px;}
 `]

})
export class EventsAppComponent  {
  title = 'ng-fundamentals';
}
