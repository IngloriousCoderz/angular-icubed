import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() tasks: Task[] = [];
  @Output() onSpanClick = new EventEmitter<number>();
  @Output() onButtonClick = new EventEmitter<number>();

  handleSpanClick(index: number) {
    this.onSpanClick.emit(index);
  }

  handleButtonClick(index: number) {
    this.onButtonClick.emit(index);
  }
}
