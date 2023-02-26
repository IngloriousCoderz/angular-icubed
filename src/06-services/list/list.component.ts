import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks!: Observable<Task[]>;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    // this.tasksService.getTasks().subscribe((tasks) => {
    //   this.tasks = tasks;
    // });

    this.tasks = this.tasksService.getTasks();
  }

  handleSpanClick(index: number) {
    this.tasksService.toggleCompleted(index);
  }

  handleButtonClick(index: number) {
    this.tasksService.removeTask(index);
  }
}
