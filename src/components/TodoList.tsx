import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction'
import { useTypesSelector } from '../hooks/useTypesSelector'

const TodoList = () => {
  const { error, limit, loading, todos } = useTypesSelector((state) => state.todo)
  const { fetchTodo } = useAction()

  useEffect(() => {
    fetchTodo()
  }, [])
  if (loading) {
    return <h1>Loding...</h1>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className='card'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>{todo.title}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
