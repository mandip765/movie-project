import React from 'react'
import { useSelector } from 'react-redux'

const NewPage = () => {
  const { todos } = useSelector((store) => store.todo);
  return (
    <div className='h-[70vh]'>
      {todos.map((todo, i) => {
        return <div key={todo.id}>
          <h1>{todo.username.kio.asdfgh}</h1>
        </div>
      })}
    </div>
  )
}

export default NewPage
