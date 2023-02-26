import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [
    { id: 1, text: 'Learn Angular', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ];

  getTasks() {
    return of(this.tasks);
  }

  addTask(task: Partial<{ text: string | null; completed: boolean | null }>) {
    const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;
    this.tasks.push({ id: maxId + 1, ...task });
  }

  toggleCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
