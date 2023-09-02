export const AddNewTask= (props)=>{
    return (
      <>
      <div className='task'>
    <h1 style={{color:props.task.state}}>{props.task.taskName} <button onClick={()=> props.deleteTask(props.task.id)}>&#10060;</button>
    <button onClick={()=> props.taskDone(props.task.id)}>&#9989;</button>
    </h1> 
    </div>
    </>); 
  }