import axios from 'axios'
import { Dispatch } from 'react'
import { UserAction, UserActionTypes } from '../../types/user'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users?_limits=5')
      console.log('response', response.data)

      setTimeout(() => {
        dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
      }, 2000)
    } catch (error) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: error.message })
      console.log(error)
    }
  }
}
