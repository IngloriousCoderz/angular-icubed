import { ListActions } from '../app.actions';
import { listReducer } from './list.reducer';

describe('ListReducer', () => {
  it('should create a new task', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
    ];
    const action = ListActions.addTask({ text: 'Forget everything' });
    const stateAfter = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];

    const state = listReducer(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it('should toggle the "completed" state given the index', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const action = ListActions.toggleCompleted({ index: 1 });
    const stateAfter = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: true },
      { id: 3, text: 'Forget everything' },
    ];

    const state = listReducer(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it('should remove a task given the index', () => {
    const stateBefore = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const action = ListActions.removeTask({ index: 1 });
    const stateAfter = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 3, text: 'Forget everything' },
    ];

    const state = listReducer(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });
});
