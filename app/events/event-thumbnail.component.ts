import { Component, Input, EventEmitter, Output } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-eventthumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .note-card {
    padding: 15px;
    border-radius: 2px;
    width: 100%;
    position: relative;
}
.title {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    color: rgba(0,0,0,0.8);
}
.value {
    text-align: left;
    font-size: 1.4rem;
    font-weight: 200;
}
.icon {
  color: black;
  font-size: 20px;
  width: 20px;
  height: 10px;
  border-radius: 100%;
  float:right;
  padding-right: 35px;
  padding-left: 15px;

}
  .
  .pad-left { margin- left: 10px;}
  .well div {color: #bbb; }
  .thumbnail {min-height:210px text-decoration:none;
    color:#000;
    background:#ffc;
    display:block;
    padding:1em;
    -moz-box-shadow:5px 5px 7px rgba(33,33,33,1);
    -webkit-box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    -moz-transition:-moz-transform .15s linear;
    -o-transition:-o-transform .15s linear;
    -webkit-transition:-webkit-transform .15s linear;}
  .green { color: #87cefa !important;}
  .red { color: #E05C65 !important;}
  .bold {font-weight:bold;}
  .blue {color: #B19CD9 !important;}
  .color-selector {
    position: relative;
}
.selector {
    min-width: 120px;
    border: 1px solid lightgrey;
    padding: 10px;
    background-color: #efefef;
    position: absolute;
    top: -50px;
    left: 0;
}
.color {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
}
.color:hover {
    border: 2px solid darkgrey;
}
  `
  ]
})

export class EventThumbnailComponent {

  constructor(private eventService: EventService) {

  }
  @Input() event: any;
  @Input() note = {};
  @Output() checked = new EventEmitter();
  showCheck = false;
  isSelectorVisible = false;
  colors: string[] = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', '#FFFFFF'];

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }

  onDelete() {
    this.checked.next(this.event);
  }

  onFav() {
    this.event.pinned = true;

  }


}
