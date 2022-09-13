/**
 * _SESSION.ACTIONS
 * Actions for session 
 */

import { Session, SESSION_EDIT, SESSION_INIT, SESSION_UPDATE } from "../classes/_session.class";

export const sessionEdit = (key:string, value:any) => ({
  type : SESSION_EDIT,
  payload : {
    key,
    value
  }
})

export const sessionInit = () => ({
  type : SESSION_INIT
})

export const sessionUpdate = (session:Partial<Session>) => ({
  type : SESSION_UPDATE,
  payload : {
    session
  }
})
