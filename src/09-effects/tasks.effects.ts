import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { map, exhaustMap, tap } from 'rxjs/operators';
import { ListActions } from './app.actions';
import { Task } from './task';

@Injectable()
export class TasksEffects {
  fetchTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.fetchTasks),
      exhaustMap(() =>
        this.http
          .get<Task[]>('http://localhost:3000/tasks')
          .pipe(map((tasks) => ListActions.receiveTasks({ tasks })))
      )
    )
  );

  addTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ListActions.addTask),
        exhaustMap(({ text }) =>
          this.http
            .post<Task>('http://localhost:3000/tasks', {
              text,
            })
            .pipe(map(() => this.store.dispatch(ListActions.fetchTasks({}))))
        )
      ),
    { dispatch: false }
  );

  toggleCompleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ListActions.toggleCompleted),
        concatLatestFrom(() => this.store.select('tasks')),
        exhaustMap(([{ index }, tasks]) =>
          this.http
            .patch<Task>(`http://localhost:3000/tasks/${tasks[index].id}`, {
              completed: !tasks[index].completed,
            })
            .pipe(map(() => this.store.dispatch(ListActions.fetchTasks({}))))
        )
      ),
    { dispatch: false }
  );

  removeTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ListActions.removeTask),
        concatLatestFrom(() => this.store.select('tasks')),
        exhaustMap(([{ index }, tasks]) =>
          this.http
            .delete<Task>(`http://localhost:3000/tasks/${tasks[index].id}`)
            .pipe(map(() => this.store.dispatch(ListActions.fetchTasks({}))))
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ tasks: Task[] }>,
    private http: HttpClient
  ) {}
}
