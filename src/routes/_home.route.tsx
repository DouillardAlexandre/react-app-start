/**
  * HOME PAGE
  * 
*/

import { useEffect } from "react"
import { connect } from "react-redux";
import { store } from "../index"
import { Account, AccountState } from "../classes/account.class"
import { useNavigate } from "react-router-dom";
import { accountFetch, accountGet } from "../redux/account.actions";
import { Session } from "../classes/_session.class";
import React from "react";

interface StateProps{
  _session : Session
  account : AccountState
}

const options = {
  timeZone:"Europe/Paris",
  hour12 : false,
}

function Home(props:StateProps){


  const navigate=useNavigate()


  useEffect(()=>{
    store.dispatch(accountGet([]))
  }, [])



  async function getAccount(){
    const response : any = await store.dispatch(accountFetch())
    if(response.status === "OK"){
      store.dispatch(accountGet(response.account))
    }
  }


  return(
    <div>
      test
    </div>
  )
  
}

const mapStateToProps = (state:any) => ({
  _session : state._session,
  account : state.account
})

export default connect(mapStateToProps)(Home)


