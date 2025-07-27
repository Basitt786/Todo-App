import { useState } from 'react'
import    "../todo-app/Todoapp.css"
import Toodoo  from './Toodoo.jsx';
import Nation from "./Nation.jsx";
import Datetime from './Datetime.jsx';


const todokey = "reacttodo"
export default function Todoapp() {
    
    const[task , Settask] = useState(() => {
        const rawtodo = localStorage.getItem(todokey);

        if (!rawtodo) return [];
       return JSON.parse(rawtodo); 
        
    });
  
    const handleFormSubmit = (inputvalue) => {
     const {id , content , checked} = inputvalue   
     
     if (!content) return;
        
    const match = task.find(
        (Curtask) => Curtask.content === content
    );

    if (match) return;

    Settask((prevtask) => [...prevtask, {id,content,checked}])
            
    }

    localStorage.setItem(todokey , JSON.stringify(task))

 const handledelete = (content) => {
    const gtop = task.filter((Curtask) => Curtask.content !== content);
    Settask(gtop)
 }


  const toggleComplete = (content) => {
    const updatedtask = task.map((Curtask) => {
        if (Curtask.content == content) {
            return{...Curtask, checked:!Curtask.checked}
        }else{
            return Curtask;
        }
    })
     Settask(updatedtask)
  };
    
        const alldelet = () => {
                Settask([]);
                localStorage.removeItem(todokey)
        }    
          
  return (
        <section className='todo-container'>

        <header>

            <h1>TODO LIST</h1>

            <Datetime />

        </header>

        <Toodoo  onaddtodo={handleFormSubmit}/>

        <section className='myUnOrdList '>

        <ul>
        {
            task.map((Curtask) => {
                return(
                 <Nation 
                 key={Curtask.id}
                  data={Curtask.content}
                  checked={Curtask.checked}
                   handledelete={handledelete}
                    toggleComplete={toggleComplete}/>
                   
                )
            })
        }  
        </ul>


        </section>
            <button className='deleted' onClick={alldelet}>Clear All</button>
        </section>
  )
}
