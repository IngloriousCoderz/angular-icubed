import { createAction, createActionGroup, props } from '@ngrx/store';

export const setText = createAction(
  '[Form] Set Text',
  props<{ text: string }>()
);

export const ListActions = createActionGroup({
  source: 'List',
  events: {
    'Add Task': props<{ text: string }>(),

    'Toggle Completed': props<{ index: number }>(),

    'Remove Task': props<{ index: number }>(),
  },
});
