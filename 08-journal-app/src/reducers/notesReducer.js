import { types } from "../types/types";

/*
  {
    notes: [],
    active: null,
    active: {
      id: '2SsdfsdfsdfJSNsd',
      title: ''
      body: '',
      imageUrl: '',
      date: 1234234234
    }
  } 
*/

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    default:
      return state;
  }
}