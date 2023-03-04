import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { Task } from '../task';
import { ListActions } from '../app.actions';
import { TasksEffects } from '../tasks.effects';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select('tasks');

  constructor(
    private store: Store<{ tasks: Task[] }>,
    private tasksEffects: TasksEffects
  ) {}

  ngOnInit() {
    this.store.dispatch(ListActions.fetchTasks({}));
  }

  handleSpanClick(index: number) {
    this.store.dispatch(ListActions.toggleCompleted({ index }));
  }

  handleButtonClick(index: number) {
    this.store.dispatch(ListActions.removeTask({ index }));
  }
}
