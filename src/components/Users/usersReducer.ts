import { IUser } from '../../interfaces/interfaces';

const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const initialState = {
  users: [] as Array<IUser>,
  isFetching: false,
  error: '',
};

type initialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        isFetching: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const fetchUsers = (): fetchUserType => ({ type: FETCH_USERS });
type fetchUserType = {
  type: typeof FETCH_USERS;
};

export const fetchUsersSuccess = (users: Array<IUser>): fetchSuccessType => ({
  type: FETCH_USERS_SUCCESS,
  users,
});

type fetchSuccessType = {
  type: typeof FETCH_USERS_SUCCESS;
  users: Array<IUser>;
};

export const fetchUsersFailure = (error: string): fetchFailureType => ({
  type: FETCH_USERS_FAILURE,
  error,
});
type fetchFailureType = {
  type: typeof FETCH_USERS_FAILURE;
  error: string;
};

export type ActionTypes = fetchUserType | fetchSuccessType | fetchFailureType;

export default usersReducer;
