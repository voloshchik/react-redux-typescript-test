import React from 'react'
import TodoList from './components/TodoList'
import UserList from './components/UserList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
          <UserList />
        </div>
        <div className='col-sm'>
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
