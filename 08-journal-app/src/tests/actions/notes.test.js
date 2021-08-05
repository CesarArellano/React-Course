import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const store = mockStore({
  auth: {
    uid: 'Testing',
  }
});

describe('Testing with asynchronous actions', () => {
  test('Must create a new note with startNewNote', async () => {
    await store.dispatch( startNewNote() );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });

    expect( actions[1] ).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });
    
    const { id } = actions[0].payload;
    await db.doc(`Testing/journal/notes/${id}`).delete();
    
  })
  
})
