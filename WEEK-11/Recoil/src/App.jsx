import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {login,logout} from './slice.js'

const App = () => {


  return (
    <div>
      <Status />
      
    </div>
  )
}

const Status = () => {
  const isLoggedIn = useSelector((state) => state.login.login); // access state

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{isLoggedIn ? "✅ Logged In" : "❌ Logged Out"}</h2>
      {isLoggedIn ? <Logout /> : <Login />}
    </div>
  );
};


const Login = ()=>{
  const dispatch = useDispatch()
  return(
 <div>
 <button onClick={()=>dispatch(login())} >Login</button>
 </div>
  )
}


const Logout = ()=>{
  const dispatch = useDispatch()
  return(
 <div>
<button onClick={()=>dispatch(logout())} >Logout</button>
 </div>
  )
}

export default App

