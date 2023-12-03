import React, { useRef, useState } from 'react';
import {Auth} from "./components/Auth";
import Cookies from 'universal-cookie';
import {Chat} from "./components/Chat";
import {signOut} from 'firebase/auth'
import {auth} from './Firebase'

const cookies = new Cookies()



function App(){
  const[isAuth,setIsAuth]=useState(cookies.get("auth-token"));
  const [room,setRoom] =useState(null);
  const roomInputRef = React.createRef()
  
  const signUserOut = async ()=>{
 
     await signOut(auth)
     cookies.remove("auth-token")
     setIsAuth(false)
     setRoom(null)
  }
  
  
  
  
  if(!isAuth){
    return(<div>
      <Auth setIsAuth=
      
      {setIsAuth}/>
      </div>);
  }
  
  return (
  
   <div className="firstPage">
    
    {room?<div><Chat room={room}/></div>:(<div className="room"><h3>Enter Room Name: <br></br></h3>
  <input ref={roomInputRef}/>
  <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button></div>
  )}
  <div className="sign-out">
    <br></br>
    <button onClick={signUserOut} >Sign Out</button>
  </div>
    
    
    </div>



);}

export default App;
