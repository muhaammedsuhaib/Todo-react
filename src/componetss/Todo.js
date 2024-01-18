import React, { useEffect, useState } from 'react';
import "./Todo.css"
import AddTask from './AddTask';
import ListTasks from './ListTasks';

const Todo = () => {
    const [task,setTasks] =useState([]);
    useEffect(()=>{
        document.title=`You have ${task.length} pending tasks`
    });
        const addTask =(title)=>{
            const newTask=[...task, {title}]
            setTasks(newTask);
        };
        const removeTask =(index)=>{
            const newTask=[...task]
            newTask.splice(index,1)
            setTasks(newTask)
        }
  return (
     <>    
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
                <AddTask addTask={addTask} />
            </div>
            <div className='tasks'>
                {task.map((task,index)=>(
                    <ListTasks task={task} removeTask={removeTask} index={index}/>
                    
                ))}
                
                
            </div>
        </div>
    </>
  )
}

export default Todo