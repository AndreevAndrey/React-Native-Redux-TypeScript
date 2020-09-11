import { ThunkAction } from 'redux-thunk';
import {
  fetchUsers,
  fetchUsersFailure,
  fetchUsersSuccess,
  ActionTypes,
} from './usersReducer';
import apiInstance from '../../api/apiInstance';
import apiConfig from '../../api/apiConfig';
import { AppStateType } from '../../redux/redux';

enum StatusResponseType {
  SUCCESS = 200,
}

export default (): ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionTypes
> => async (dispatch) => {
  dispatch(fetchUsers());
  try {
    const response = await apiInstance.get(apiConfig.USERS_PAGE(2));
    if (response.status === StatusResponseType.SUCCESS) {
      dispatch(fetchUsersSuccess(response.data.data));
    }
  } catch (e) {
    dispatch(fetchUsersFailure(e.message));
  }
};
