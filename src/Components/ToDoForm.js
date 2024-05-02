import React, {useState} from 'react'

export const ToDoForm = () => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        console.log(value)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='What are you going todo?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>+</button>
    </form>
  ) 
}
