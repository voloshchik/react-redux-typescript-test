import React from 'react'

import { useTypesSelector } from '../hooks/useTypesSelector'

const UserList = () => {
  const { users, error, loading } = useTypesSelector((state) => state.user)
  console.log(users)
  return (
    <div>
      <h2>User List</h2>
    </div>
  )
}

export default UserList
