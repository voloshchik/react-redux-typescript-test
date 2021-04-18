export interface UserState {
  users: any[]
  loading: Boolean
  error: null | String
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: String
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUserErrorAction
