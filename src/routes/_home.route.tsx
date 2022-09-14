/**
  * HOME PAGE
  * 
*/

import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { store } from "../index"
import { useNavigate } from "react-router-dom";
import { accountSaveData, accountSearch } from "../redux/account.actions";
import { Session } from "../classes/_session.class";

interface StateProps{
  _session : Session
}

const options = {
  timeZone:"Europe/Paris",
  hour12 : false,
}

type QueryMode = "WRITE" | "SEARCH"

function Home(props:StateProps){


  const navigate=useNavigate()
  const [mode, setMode] = useState<QueryMode>("WRITE")
  const [key, setKey] = useState<string>("")
  const [value, setValue] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isError, setIsError] = useState<boolean>(false)


  useEffect(()=>{
  }, [])

  async function saveData(){
    const response: any = await store.dispatch(accountSaveData(key, value))
    if(response.data.dataSaved){
      setIsError(false)
      setMessage(`Data : { key : ${key}, value : ${value} } correctly saved in Redis !`)
    }
    else{
      setIsError(true)
      setMessage(`Error saving data { key : ${key}, value : ${value} } in Redis !`)
    }
  }

  async function search(){
    const response: any = await store.dispatch(accountSearch(key))
    if(response.data.value){
      setIsError(false)
      setMessage(`Value for key ${key} is : ${response.data.value} !`)
    }
    else{
      setIsError(true)
      setMessage(`Error getting data for ${key} !`)
    }
  }



  return(
    <div>
      <div style={{width : "100%", height : "50px", padding:"10px", backgroundColor : "#745692", color:"white"}}>
        React app for Redis queries
      </div>

      <p>Select mode</p>


      {mode==="SEARCH"?
      <div>

        <div
          style={{width : "100px", margin:"10px", color:"black", backgroundColor:"#e9e9e9", cursor:"pointer"}}
          onClick={()=>setMode("WRITE")}
        >
          WRITE
        </div>

        <div
          style={{width : "100px", margin:"10px", color:"white", backgroundColor:"#745692"}}
        >
          SEARCH
        </div>

        <input
          type="text"
          value={key}
          onChange={(event:any)=>setKey(event.target.value)}
        />

        <button
          onClick={search}
        >
          Chercher
        </button>
      </div>
      :
      <div>

        <div
          style={{width : "100px", margin:"10px", color:"white", backgroundColor:"#745692"}}
        >
          WRITE
        </div>

        <div
          style={{width : "100px", margin:"10px", color:"black", backgroundColor:"#e9e9e9", cursor:"pointer"}}
          onClick={()=>setMode("SEARCH")}
        >
          SEARCH
        </div>

        <input
          type="text"
          value={key}
          onChange={(event:any)=>setKey(event.target.value)}
        />

        <input
          type="text"
          value={value}
          onChange={(event:any)=>setValue(event.target.value)}
        />

        <button
          onClick={saveData}
        >
          Valider
        </button>
      </div>
      
      }

      <p style={{color:(isError?"#ee1010":"#10da20")}}>{message}</p>

    </div>
  )
  
}

const mapStateToProps = (state:any) => ({
  _session : state._session,
})

export default connect(mapStateToProps)(Home)