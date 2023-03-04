import { createAction, createActionGroup, props } from '@ngrx/store';
import { Task } from './task';

export const setText = createAction(
  '[Form] Set Text',
  props<{ text: string }>()
);

export const ListActions = createActionGroup({
  source: 'List',
  events: {
    'Fetch Tasks': props<{ error?: any }>(),

    'Receive Tasks': props<{ tasks: Task[] }>(),

    'Add Task': props<{ text: string }>(),

    'Toggle Completed': props<{ index: number }>(),

    'Remove Task': props<{ index: number }>(),
  },
});
