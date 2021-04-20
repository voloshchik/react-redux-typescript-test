import axios from 'axios'
import { Dispatch } from 'react'
import { TodoAction, TodoActionTypes } from '../../types/todo'

export const fetchTodo = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?', {
        params: { _page: page, _limit: limit },
      })
      console.log('response', response.data)

      setTimeout(() => {
        dispatch({ type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data })
      }, 1000)
    } catch (error) {
      dispatch({ type: TodoActionTypes.FETCH_ERROR, payload: error.message })
      console.log(error)
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}
