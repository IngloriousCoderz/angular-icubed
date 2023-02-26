import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import { ListActions } from '../app.actions';

const initialState: Task[] = [
  { id: 1, text: 'Learn Angular', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
];

export const listReducer = createReducer(
  initialState,

  on(ListActions.addTask, (state, { text }) => {
    const maxId = state.length ? state[state.length - 1].id : 0;
    return [...state, { id: maxId + 1, text }];
  }),

  on(ListActions.toggleCompleted, (state, { index }) => {
    return [
      ...state.slice(0, index),
      { ...state[index], completed: !state[index].completed },
      ...state.slice(index + 1),
    ];
  }),

  on(ListActions.removeTask, (state, { index }) => {
    return [...state.slice(0, index), ...state.slice(index + 1)];
  })
);
