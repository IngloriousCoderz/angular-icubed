import { setText, ListActions } from '../app.actions';
import { formReducer } from './form.reducer';

describe('FormReducer', () => {
  it('should set some new text', () => {
    const stateBefore = 'Some text';
    const action = setText({ text: 'Some other text' });
    const stateAfter = 'Some other text';

    const state = formReducer(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it('should reset the text to an empty string', () => {
    const stateBefore = 'Some text';
    const action = ListActions.addTask({ text: 'Some other text' });
    const stateAfter = '';

    const state = formReducer(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });
});
