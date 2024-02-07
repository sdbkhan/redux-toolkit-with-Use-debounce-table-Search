import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearPersistedState, setCredential } from "../redux/userSlice/userSlice"
import { getUsers } from "../redux/apiSlice/apiSlice"

const SigIn = () => {
    let initialval={username:"",password:""}
    const [state,setState]=useState(initialval)
    const data = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const handleChange = (e)=>{
       setState({...state,[e.target.name]:e.target.value})
    }
    console.log(data,"state")
    const handleSubmit = ()=>{
        dispatch(setCredential(state))
    }
    const handleClear=()=>{
        dispatch(clearPersistedState())
    }
    useEffect(()=>{
        dispatch(getUsers())
    })
    return (
        <div> <form onSubmit={handleSubmit}>
            <div className="username">
                <label>User Name : </label>
                <input name="username" type="text" onChange={handleChange} />
            </div>
            <div className="password">
                <label>Password : </label>
                <input name="password" type="password" onChange={handleChange}  />
            </div>
            <br />
            <div className="Button" onClick={handleSubmit}>Submit</div>
            <div className="Button" onClick={handleClear}>clear</div>

        </form></div>
    )
}
export default SigIn