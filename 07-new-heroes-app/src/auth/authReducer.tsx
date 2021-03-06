import { types } from "../types/types";

// const state  = {
//   name: 'César',
//   logged: true
// }

export const authReducer = ( state = {}, action: any ) => {
  
  switch(action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      }
    case types.logout:
      return {
        logged: false
      }
    default:
      return state;
  }
}
