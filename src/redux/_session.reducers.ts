//SESSION REDUCERS

import { Session, SESSION_EDIT, SESSION_INIT, SESSION_UPDATE } from "../classes/_session.class";

const initialState:Session = new Session()

export default function reducers(
  state = initialState,
  action:any
):Session{
  switch (action.type) {

    case SESSION_EDIT:
      return new Session(Object.assign({}, state, {
        [action.payload.key] : action.payload.value
      }))
    
    case SESSION_INIT:
      return new Session(state)

    case SESSION_UPDATE:
      return new Session(action.payload.session)

    default:
      return state
      
  }
  
}
