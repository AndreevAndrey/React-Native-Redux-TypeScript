import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../components/Users/usersReducer';

const reducers = combineReducers({
  app: usersReducer,
});

type reducerType = typeof reducers;
export type AppStateType = ReturnType<reducerType>;

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
