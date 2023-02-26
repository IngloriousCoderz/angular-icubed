import { createReducer, on } from '@ngrx/store';
import { ListActions, setText } from '../app.actions';

const initialState = '';

export const formReducer = createReducer(
  initialState,

  on(setText, (_, { text }) => text),

  on(ListActions.addTask, () => initialState)
);
