//_INDEX.REDUCERS.JS
//Liste de tout les objets manipulés dans l'application

import { combineReducers } from 'redux'
import _session  from './_session.reducers'
import account  from './account.reducers'


export default combineReducers({
  _session,
  account
})
