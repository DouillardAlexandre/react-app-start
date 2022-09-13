/** 
 * ACCOUNT.REDUCERS
 * Update account
 */


import { Account, AccountState, ACCOUNT_ACTIVATE, ACCOUNT_ADD, ACCOUNT_EDIT, ACCOUNT_GET, ACCOUNT_INIT, ACCOUNT_STATUS } from "../classes/account.class"

var active:Account

const initialState: AccountState = {
  active : new Account(),
  list : [],
  status : "STATUS_LOADED"
}

export default function accountReducer(
  state = initialState,
  action: any
): AccountState {
  switch (action.type) {

    //Set as active account
    case ACCOUNT_ACTIVATE:
      return Object.assign({}, state, {
        active : new Account(action.payload.account)
      })

    //Add new account
    case ACCOUNT_ADD:
      active = new Account()
      return Object.assign({}, state, { active })

    //Edit active account
    case ACCOUNT_EDIT:
      active = Object.assign(state.active, { [action.payload.key] : action.payload.value })
      return Object.assign({}, state, { active })

    //Save liste des comptes in reducer
    case ACCOUNT_GET:
      return Object.assign({}, state, {
        list : action.payload.accounts.map((x:any) => new Account(x))
      })

    //Init store
    case ACCOUNT_INIT:
      return Object.assign({}, state, {
        active : new Account(state.active),
        list : state.list.map((x:any) => new Account(x)),
        status : initialState.status
      })

    //Update status
    case ACCOUNT_STATUS:
      return Object.assign({}, state, {
        status : action.payload.status
      })

    default:
      return state

  }

}