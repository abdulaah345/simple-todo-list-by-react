import './App.css';
import{useRef, useState} from "react";
function App() {
  const[x,setx]=useState([]);
  const inputref=useRef();
  const add=()=>{
      const value=inputref.current.value;
      const newdata={completed:false,value}
      setx([...x,newdata]);
      inputref.current.value="";
  }
  const itemdone=(index)=>{
    const newx=[...x]
    newx[index].completed=!newx[index].completed
    setx (newx)
  }
  const todelete=(index)=>{
    const newx=[...x]
    newx.splice(index,1)
    setx(newx)
  }
  return (
    <div className="App">
      <h2>To do list</h2>
     <ul>
     {
          x.map(({value,completed},index ) => {
              return <div className='divvv'> <li className={completed? "diffstyle":""} onClick={()=>itemdone(index)}>{value}</li>
                  <span onClick={()=>todelete(index)}>
                    ❌
                  </span>
               </div>
          })
        }
     </ul>
     <input ref={inputref} placeholder='Enter the name of task'/>
     <button onClick={add} type="submit">Add Task</button>
    </div>
  );
}

export default App;
