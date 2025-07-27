import React, { useState } from 'react'

export default function Toodoo({onaddtodo}) {
    const [inputvalue , Setinputvalue] = useState({id:'', content:'', checked:false});


     const  handleinputchange = (value) => {
        Setinputvalue({id:Date.now().toString(), content:value, checked:false})
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (!inputvalue.content.trim()) return;
        onaddtodo(inputvalue)
        
        Setinputvalue({id:'', content:'', checked:false}) 
    }
  return (
    <>
       <section className="form">

        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text"
                 className='todo-input'
                 value={inputvalue.content}
                 autoComplete='off'
                  onChange={(event) => handleinputchange(event.target.value)} />
            </div>

            <div>
                <button type='submit' className='todo-btn'>Add Task</button>
            </div>
        </form>
    </section>
    </>
  )
}
