import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRegister } from '../redux/slices/userSlice'
const Register = () => {
    const e=useRef()
    const p=useRef()
    const dispatch=useDispatch()
    const {error,loading}=useSelector(state=>state.user)

  return (
    <div>
      <input type='email' placeholder='type your email' ref={e}></input>
      <input type='password' placeholder='type your password' ref={p}></input>
      <button onClick={()=>{
      dispatch(UserRegister({
        email:e.current.value,
        password:p.current.value
      }))
      }}>Register</button>
            {loading && <h5>loading...</h5>}
            {error && <h4>{error}</h4>}
    </div>
  )
}

export default Register
