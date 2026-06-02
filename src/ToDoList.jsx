import React, {useState} from 'react';

function ToDoList(){
    
    const[tasks ,setTasks] =useState(["Eat Breakfast ", "Take a  Shower"]);//one string for each task and initila state of taska will be an  empt array
const[newTask ,setNewTask] =useState("");
  function handleInputChange(event){
  setNewTask (event.target.value);

  }

function addTask(){
if (newTask.trim() !== ""){ //new trim fucntion is sued to add empty tasks and confrms after eremoving sopaces if their is some words and strings add it to the task list
setTasks(t => [...t, newTask]);
setNewTask("");
}
}


function deleteTask(index){
const updatedTasks=tasks.filter((element, i) => i!==index) //if i is not equals to one we wanna delete keep it 
setTasks(updatedTasks); //replace  the old list with new list
}

function moveTaskUp(index){
  if (index>0){
const updatedTasks=[...tasks];
[updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
setTasks(updatedTasks);  //index-1 means item just above 
}                                                                                       
}

function moveTaskDown(index){
  if (index < tasks.length-1){
const updatedTasks=[...tasks];
[updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
setTasks(updatedTasks); //index+1 means item just above
}                                                                                       
}












 return(

<div className="todo-list">
    <h1>To-Do-List</h1>
 
    <input type="text" placeholder="Add Sme New Task" value={newTask} onChange={handleInputChange}/>
    <button className="add-button" onClick={addTask}>
        Add </button>


<ol>

    {tasks.map((task,index)=>
    <li key={index}>
        <span className="text">{task}</span>
        <button

className="delete-button" onClick={() => deleteTask(index)}>
Delete

        </button>

<button

className="move-button" 
onClick={() => moveTaskUp(index)}>
Move Up

        </button>

        <button

className="move-button" 
onClick={() => moveTaskDown(index)}>
Move Down

        </button>


    </li>
    
    )}
</ol>




 </div>);
}
export default ToDoList;