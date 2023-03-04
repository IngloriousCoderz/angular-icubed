import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import { ListActions } from '../app.actions';

const initialState: Task[] = [];

export const listReducer = createReducer(
  initialState,

  on(ListActions.receiveTasks, (state, { tasks }) => {
    return tasks;
  })
);
