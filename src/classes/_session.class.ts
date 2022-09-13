/**
 * Class Session
 */


import { Account } from "./account.class"


export class Session{
  User: any | null = null
  Account: Account = new Account()
  language: string = "fr"

  constructor(_session: Partial<Session> = {}){
    if (!_session) _session = new Session()
    Object.assign(this, _session)
  }
 
}

//SESSION REDUCERS

export const SESSION_EDIT: string = 'SESSION_EDIT'
export const SESSION_INIT: string = 'SESSION_INIT'
export const SESSION_UPDATE: string = 'SESSION_UPDATE'
