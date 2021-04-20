import React, { useEffect } from 'react'

import { useAction } from '../hooks/useAction'

import { useTypesSelector } from '../hooks/useTypesSelector'

const UserList = () => {
  const { fetchUsers } = useAction()
  const { users, error, loading } = useTypesSelector((state) => state.user)

  useEffect(() => {
    fetchUsers()
  }, [])
  console.log('users', users)

  if (loading) {
    return <h1>Loding...</h1>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div className='card'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>{user.name}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default UserList
