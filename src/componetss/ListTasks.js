import React from 'react'

const ListTasks = ({task,index,removeTask}) => {
  return (
    <>
        <div className='list-task'>
          {task.title}
            <button onClick={()=>{removeTask(index)}} className='delete-btn' key={index}>Delete</button>
        </div>
    </>
  )
}

export default ListTasks