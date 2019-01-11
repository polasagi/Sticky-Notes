import {
  Component,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'color-picker',
  styles: [`
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
      .icon {
          font-size: 1.4rem;
          color: grey;
          cursor: pointer;
      }
  `],
  templateUrl: './test.html'
})

export class ColorPicker {
 colors: string[] = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', '#FFFFFF'];

  @Output() selected = new EventEmitter();
  isSelectorVisible = false;

  selectColor(color: string) {
      this.showSelector(false);
      this.selected.next(color);
  }

  showSelector(value: boolean) {
      this.isSelectorVisible = value;
  }
}
