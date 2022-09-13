/**
 * Class Account
 *
 */

export class Account{
  id : string = ""
  name : string = ""
  options : object = {}
  picture : string = ""
  adminLevel : number = 0
  dateCreated : Date = new Date()

  constructor(account: Partial<Account> = {}){
    if (!account) account = new Account()
    account.options = new AccountOptions(account.options)
    Object.assign(this, account)
  }

}

export class AccountOptions{
  constructor(accountColors: Partial<AccountOptions> = {}){
    Object.assign(this, accountColors)
  }
}

export interface AccountState{
  active : Account
  list : Account[]
  status : string
}

export const ACCOUNT_ACTIVATE: string = "ACCOUNT_ACTIVATE"
export const ACCOUNT_ADD: string = "ACCOUNT_ADD"
export const ACCOUNT_EDIT: string = "ACCOUNT_EDIT"
export const ACCOUNT_GET: string = "ACCOUNT_GET_ALL"
export const ACCOUNT_INIT: string = "ACCOUNT_INIT"
export const ACCOUNT_STATUS: string = "ACCOUNT_SET_STATUS"