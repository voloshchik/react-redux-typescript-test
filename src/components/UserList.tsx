import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
      <h3>test</h3>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>
      })}
    </div>
  )
}

export default UserList
