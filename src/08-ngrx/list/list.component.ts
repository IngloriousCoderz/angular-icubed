import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../task';
import { ListActions } from '../app.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks!: Observable<Task[]>;

  constructor(private store: Store<{ tasks: Task[] }>) {}

  ngOnInit() {
    this.tasks = this.store.select('tasks');
  }

  handleSpanClick(index: number) {
    this.store.dispatch(ListActions.toggleCompleted({ index }));
  }

  handleButtonClick(index: number) {
    this.store.dispatch(ListActions.removeTask({ index }));
  }
}
