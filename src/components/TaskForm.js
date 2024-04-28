import React, { useRef } from 'react'
import { CreateTask } from '../redux/slices/taskSlice'
import {useDispatch} from 'react-redux'

const TaskForm = () => {
    const title=useRef()
    const descripition=useRef()
    const dispatch=useDispatch()
  return (
    <div>
      <input type='text' placeholder='type your task title'ref={title}></input>
      <input type='text' placeholder='type your task descripition'ref={descripition}></input>
      <button onClick={()=>{
dispatch(CreateTask({
    title:title.current.value,
    desc:descripition.current.value
}))
      }}>Add New Task</button>
    </div>
  )
}

export default TaskForm
