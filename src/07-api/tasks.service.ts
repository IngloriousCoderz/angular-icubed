import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private refetchSubect = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  get refetch() {
    return this.refetchSubect.asObservable();
  }

  getTasks() {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  addTask(task: Partial<{ text: string | null; completed: boolean | null }>) {
    this.http
      .post<Task>('http://localhost:3000/tasks', task)
      .pipe(tap(() => this.refetchSubect.next(null)))
      .subscribe();
  }

  toggleCompleted(task: Task) {
    this.http
      .patch<Task>(`http://localhost:3000/tasks/${task.id}`, {
        completed: !task.completed,
      })
      .pipe(tap(() => this.refetchSubect.next(null)))
      .subscribe();
  }

  removeTask(task: Task) {
    this.http
      .delete<Task>(`http://localhost:3000/tasks/${task.id}`)
      .pipe(tap(() => this.refetchSubect.next(null)))
      .subscribe();
  }
}
