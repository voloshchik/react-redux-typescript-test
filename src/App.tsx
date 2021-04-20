import React from 'react'
import TodoList from './components/TodoList'
import UserList from './components/UserList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <h1>hello</h1>
      <UserList />
      <hr />
      <TodoList />
    </div>
  )
}

export default App
