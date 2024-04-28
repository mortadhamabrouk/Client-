import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTasks } from '../redux/slices/taskSlice'
import Task from './Task'

const UserList = () => {
    const dispatch=useDispatch()
    const {taskData}=useSelector(state=>state.tasks)
    useEffect(()=>{
dispatch(GetTasks())
    },[dispatch])
    
   
  return (
    <div>
     {taskData.map(task=><Task  mytask={task}/>)} 

    </div>
    
  )
}
 
export default UserList
