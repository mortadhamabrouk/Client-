import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTask } from '../redux/slices/taskSlice'

const Task = ({mytask}) => {
  const dispatch=useDispatch()
  return (
    <div>
      <h3>{mytask.title}</h3>
      <h3>{mytask.desc}</h3>
      <button onClick={()=> {
        dispatch(DeleteTask(mytask._id))
      }}>Delete Task</button>


      
      
    </div>
  )
}

export default Task
