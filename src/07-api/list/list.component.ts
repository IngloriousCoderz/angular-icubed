import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  tasks$: Observable<Task[]> = this.tasksService.refetch.pipe(
    switchMap(() => this.tasksService.getTasks()) // @see https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
  );

  constructor(private tasksService: TasksService) {}

  handleSpanClick(task: Task) {
    this.tasksService.toggleCompleted(task).subscribe();
  }

  handleButtonClick(task: Task) {
    this.tasksService.removeTask(task).subscribe();
  }
}
