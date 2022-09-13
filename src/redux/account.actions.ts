import { Account, ACCOUNT_ACTIVATE, ACCOUNT_ADD, ACCOUNT_EDIT, ACCOUNT_GET, ACCOUNT_INIT, ACCOUNT_STATUS } from "../classes/account.class"

export const accountActivate = (account:Account) => ({
  type : ACCOUNT_ACTIVATE,
  payload : {
    account
  }
})

export const accountAdd = () => ({
  type : ACCOUNT_ADD,
})

export const accountEdit = (key:string, value:any) => ({
  type : ACCOUNT_EDIT,
  payload : {
    key,
    value
  }
})

export const accountGet = (accounts:Account[]) => ({
  type : ACCOUNT_GET,
  payload : {
    accounts
  }
})


export const accountInit = () => ({
  type : ACCOUNT_INIT
})

export const accountStatus = (status:string) => ({
  type : ACCOUNT_STATUS,
  payload : {
    status
  }
})


//API

export const accountDestroy = (id:string) => ({
  type : "API",
  payload : {
    method : "DELETE",
    url : "/account/" + id
  }
})


export const accountFetch = () => ({
  type : "API",
  payload : {
    method : "GET",
    url : "/accounts"
  }
})

export const accountInsert = (account:Account) => ({
  type : "API",
  payload : {
    method : "POST",
    url : "/account",
    data : {
      account
    }
  }
})