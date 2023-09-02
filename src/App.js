import { useState } from 'react';
import './App.css';
import {AddNewTask} from "./Task"
function App() {
  const [todolist,setTodoList] = useState([])
  const [currenttask,setCurrentTask]=useState("")
  const deleteTask =(deltask)=>{
       setTodoList(todolist.filter((task)=> task.id!==deltask))
  }
  
  const taskDone=(taskid)=>{
   setTodoList( todolist.map((task)=>{
    console.log(todolist,taskid);
      if(task.id==taskid){
        return {...task,state:"green"}
        
      }else{
        return task
      }
      
    }))
  }
  return (
    <div className="App">
      <div className='addTask'>
          <input onChange={(e)=>{
            setCurrentTask(e.target.value)
          }}/>
          <button onClick={()=>{
            if (currenttask!=""){
              setTodoList([...todolist,{id:todolist.length+1,
              taskName:currenttask,
              state:"white"
            }])
              
            }
          }
          }>Add task</button>
      </div>
      <div className='list'>
        
            {todolist.map((task)=>{
                    return  <AddNewTask task={task} deleteTask={deleteTask} taskDone={taskDone} />     
              })}
          
      </div>
    </div>
  );
}




export default App;
