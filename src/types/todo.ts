export interface TodoState {
  todos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODO_SUCCESS = 'FETСH_TODO_SUCCESS',
  FETCH_ERROR = 'FETСH_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodos {
  type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodosSuccess {
  type: TodoActionTypes.FETCH_TODO_SUCCESS
  payload: any[]
}

interface FetchTodosError {
  type: TodoActionTypes.FETCH_ERROR
  payload: string
}

interface SetTodosPage {
  type: TodoActionTypes.SET_TODO_PAGE
  payload: number
}

export type TodoAction = FetchTodos | FetchTodosSuccess | FetchTodosError | SetTodosPage
